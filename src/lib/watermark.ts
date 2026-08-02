import "server-only";

import { readFile, writeFile } from "node:fs/promises";
import { AudioContext, type AudioBuffer as NodeAudioBuffer } from "web-audio-api";
import prisma from "@/lib/prisma";

const WATERMARK_ALGORITHM = "spread-spectrum-lsb-v1";
const SAMPLE_STRIDE = 512;
const WATERMARK_AMPLITUDE = 1e-7;

export interface EmbedWatermarkInput {
  assetId: string;
  inputFilePath: string;
  outputFilePath: string;
  payload: string;
}

export interface WatermarkPipelineResult {
  assetId: string;
  outputFilePath: string;
  algorithm: string;
}

/**
 * Server-only watermarking pipeline. It decodes an audio file with the
 * Node-compatible Web Audio implementation, applies a low-amplitude payload,
 * writes a WAV artifact, and records the corresponding watermark metadata.
 */
export async function embedWatermark({
  assetId,
  inputFilePath,
  outputFilePath,
  payload,
}: EmbedWatermarkInput): Promise<WatermarkPipelineResult> {
  if (!assetId || !payload.trim()) {
    throw new Error("An asset ID and watermark payload are required.");
  }

  const context = new AudioContext({ sinkId: { type: "none" } });
  try {
    const sourceBytes = await readFile(inputFilePath);
    const source = await context.decodeAudioData(sourceBytes);
    const watermarked = context.createBuffer(
      source.numberOfChannels,
      source.length,
      source.sampleRate,
    );

    for (let channel = 0; channel < source.numberOfChannels; channel += 1) {
      watermarked.copyToChannel(source.getChannelData(channel), channel);
    }
    applyPayload(watermarked, payload);

    await writeFile(outputFilePath, audioBufferToWav(watermarked));
    await prisma.watermark.upsert({
      where: { assetId },
      create: { assetId, payload: payload.trim(), algorithm: WATERMARK_ALGORITHM },
      update: { payload: payload.trim(), algorithm: WATERMARK_ALGORITHM },
    });

    return { assetId, outputFilePath, algorithm: WATERMARK_ALGORITHM };
  } finally {
    await context.close();
  }
}

function applyPayload(buffer: NodeAudioBuffer, payload: string) {
  const bits = Array.from(payload)
    .flatMap((character) =>
      character.charCodeAt(0).toString(2).padStart(8, "0").split(""),
    )
    .map(Number);

  if (bits.length * SAMPLE_STRIDE > buffer.length) {
    throw new Error("Audio asset is too short to contain this watermark payload.");
  }

  for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
    const samples = buffer.getChannelData(channel);
    bits.forEach((bit, index) => {
      const sampleIndex = index * SAMPLE_STRIDE;
      const delta = bit === 1 ? WATERMARK_AMPLITUDE : -WATERMARK_AMPLITUDE;
      samples[sampleIndex] = Math.max(-1, Math.min(1, samples[sampleIndex] + delta));
    });
  }
}

function audioBufferToWav(buffer: NodeAudioBuffer): Buffer {
  const bytesPerSample = 2;
  const blockAlign = buffer.numberOfChannels * bytesPerSample;
  const output = Buffer.alloc(44 + buffer.length * blockAlign);

  output.write("RIFF", 0);
  output.writeUInt32LE(36 + buffer.length * blockAlign, 4);
  output.write("WAVEfmt ", 8);
  output.writeUInt32LE(16, 16);
  output.writeUInt16LE(1, 20);
  output.writeUInt16LE(buffer.numberOfChannels, 22);
  output.writeUInt32LE(buffer.sampleRate, 24);
  output.writeUInt32LE(buffer.sampleRate * blockAlign, 28);
  output.writeUInt16LE(blockAlign, 32);
  output.writeUInt16LE(16, 34);
  output.write("data", 36);
  output.writeUInt32LE(buffer.length * blockAlign, 40);

  let offset = 44;
  for (let sample = 0; sample < buffer.length; sample += 1) {
    for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
      const value = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[sample]));
      output.writeInt16LE(Math.round(value * 0x7fff), offset);
      offset += bytesPerSample;
    }
  }

  return output;
}
