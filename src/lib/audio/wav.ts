import { readFile, writeFile } from "node:fs/promises";
import * as wav from "node-wav";

export interface WavAudioData {
  sampleRate: number;
  channelData: readonly Float32Array[];
}

export async function readWav(file: string): Promise<WavAudioData> {
  const buffer = await readFile(file);
  const decoded = wav.decode(buffer);
  return {
    sampleRate: decoded.sampleRate,
    channelData: decoded.channelData,
  };
}

export async function writeWav(
  file: string,
  audio: WavAudioData,
): Promise<void> {
  const encoded = wav.encode(audio.channelData, {
    sampleRate: audio.sampleRate,
    float: true,
    bitDepth: 32,
  });

  await writeFile(file, encoded);
}

export function cloneChannelData(
  channels: readonly Float32Array[],
): Float32Array[] {
  return channels.map((c) => new Float32Array(c));
}

export function getFrameCount(channels: Float32Array[]): number {
  return channels.length ? channels[0].length : 0;
}
