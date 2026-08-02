import "server-only";

import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { decodeToWav, encodeFromWav } from "./ffmpeg";
import { cloneChannelData, getFrameCount, readWav, writeWav } from "./wav";

const WATERMARK_ALGORITHM = "spread-spectrum-lsb-v1";
const SAMPLE_STRIDE = 512;
const WATERMARK_AMPLITUDE = 1e-7;

export interface EmbedWatermarkInput {
  inputFilePath: string;
  outputFilePath: string;
  payload: string;
}

export interface WatermarkPipelineResult {
  outputFilePath: string;
  algorithm: string;
}

export async function embedWatermark(
  input: EmbedWatermarkInput,
): Promise<WatermarkPipelineResult> {
  const work = await mkdtemp(path.join(tmpdir(), "aaron-watermark-"));
  const decoded = path.join(work, "decoded.wav");
  const modified = path.join(work, "modified.wav");

  try {
    await decodeToWav(input.inputFilePath, decoded);

    const audio = await readWav(decoded);
    const channels = cloneChannelData(audio.channelData);

    applyPayload(channels, input.payload);

    await writeWav(modified, {
      sampleRate: audio.sampleRate,
      channelData: channels,
    });

    await encodeFromWav(modified, input.outputFilePath);

    return {
      outputFilePath: input.outputFilePath,
      algorithm: WATERMARK_ALGORITHM,
    };
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}

function applyPayload(channels: Float32Array[], payload: string) {
  const bits = Array.from(payload)
    .flatMap((c) => c.charCodeAt(0).toString(2).padStart(8, "0").split(""))
    .map(Number);

  const frames = getFrameCount(channels);

  if (bits.length * SAMPLE_STRIDE > frames) {
    throw new Error(
      "Audio asset is too short to contain this watermark payload.",
    );
  }

  for (const samples of channels) {
    bits.forEach((bit, index) => {
      const sampleIndex = index * SAMPLE_STRIDE;
      const delta = bit === 1 ? WATERMARK_AMPLITUDE : -WATERMARK_AMPLITUDE;
      samples[sampleIndex] = Math.max(
        -1,
        Math.min(1, samples[sampleIndex] + delta),
      );
    });
  }
}
