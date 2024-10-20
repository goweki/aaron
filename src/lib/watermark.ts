"use client";

import fs from "fs";
// import {
//   createAudioContext,
//   OfflineAudioContext,
//   AudioBuffer,
// } from "web-audio-api";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Function to embed a watermark in the audio file
async function embedWatermark(
  inputFilePath: string,
  outputFilePath: string,
  watermarkText: string
): Promise<void> {
  // Create an AudioContext, checking for webkitAudioContext for compatibility
  const audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)();

  // Load the audio file
  const audioBuffer = await loadAudioFile(audioContext, inputFilePath);

  // Convert the watermark text to binary
  const watermarkBinary = textToBinary(watermarkText);

  // Embed the watermark in the audio buffer
  const watermarkedBuffer = embedWatermarkInBuffer(
    audioBuffer,
    watermarkBinary
  );

  // Save the watermarked audio to disk
  await saveAudioFile(audioContext, watermarkedBuffer, outputFilePath);

  // Save the watermark to the database
  await saveWatermarkToDatabase(outputFilePath, watermarkText);
}

// Function to load an audio file into an AudioBuffer
function loadAudioFile(
  audioContext: AudioContext,
  filePath: string
): Promise<AudioBuffer> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err);

      audioContext.decodeAudioData(
        data.buffer,
        (buffer) => {
          resolve(buffer);
        },
        reject
      );
    });
  });
}

// Function to convert text to binary
function textToBinary(text: string): string {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");
}

// Function to embed the watermark binary into the audio buffer
function embedWatermarkInBuffer(
  audioBuffer: AudioBuffer,
  watermarkBinary: string
): AudioBuffer {
  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const length = audioBuffer.length;

  // Create an AudioContext, checking for webkitAudioContext for compatibility
  const audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)();

  // Create a new buffer using the AudioContext
  const newBuffer = audioContext.createBuffer(numChannels, length, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const inputData = audioBuffer.getChannelData(channel);
    const outputData = newBuffer.getChannelData(channel);

    for (let i = 0; i < length; i++) {
      outputData[i] = inputData[i];

      // Embed the watermark bit into the LSB of the sample
      if (i < watermarkBinary.length) {
        const watermarkBit = parseInt(watermarkBinary[i], 2);
        outputData[i] = (inputData[i] & ~1) | watermarkBit;
      }
    }
  }

  return newBuffer;
}

// Function to save the watermarked audio buffer to a file
function saveAudioFile(
  audioContext: AudioContext,
  audioBuffer: AudioBuffer,
  filePath: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const offlineContext = new OfflineAudioContext(
      audioBuffer.numberOfChannels,
      audioBuffer.length,
      audioBuffer.sampleRate
    );

    const bufferSource = offlineContext.createBufferSource();
    bufferSource.buffer = audioBuffer;
    bufferSource.connect(offlineContext.destination);
    bufferSource.start();

    offlineContext
      .startRendering()
      .then((renderedBuffer: AudioBuffer) => {
        const wavData = audioBufferToWav(renderedBuffer);
        fs.writeFile(filePath, Buffer.from(wavData), (err) => {
          if (err) return reject(err);
          resolve();
        });
      })
      .catch(reject);
  });
}

// Function to convert an AudioBuffer to a WAV file format
function audioBufferToWav(buffer: AudioBuffer): ArrayBuffer {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const format = 1; // PCM
  const bitsPerSample = 16;

  let header = new ArrayBuffer(44);
  let view = new DataView(header);

  /* RIFF identifier */
  writeString(view, 0, "RIFF");
  /* RIFF chunk length */
  view.setUint32(4, 36 + buffer.length * 2 * numChannels, true);
  /* RIFF type */
  writeString(view, 8, "WAVE");
  /* format chunk identifier */
  writeString(view, 12, "fmt ");
  /* format chunk length */
  view.setUint32(16, 16, true);
  /* sample format (raw) */
  view.setUint16(20, format, true);
  /* channel count */
  view.setUint16(22, numChannels, true);
  /* sample rate */
  view.setUint32(24, sampleRate, true);
  /* byte rate (sample rate * block align) */
  view.setUint32(28, sampleRate * numChannels * 2, true);
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, numChannels * 2, true);
  /* bits per sample */
  view.setUint16(34, bitsPerSample, true);
  /* data chunk identifier */
  writeString(view, 36, "data");
  /* data chunk length */
  view.setUint32(40, buffer.length * 2 * numChannels, true);

  // Convert the samples
  let samples = new Int16Array(buffer.length * numChannels);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < channelData.length; i++) {
      samples[i * numChannels + channel] =
        Math.max(-1, Math.min(1, channelData[i])) * 32767;
    }
  }

  // Write the sample data
  let wav = new Uint8Array(header.byteLength + samples.byteLength);
  wav.set(new Uint8Array(header), 0);
  wav.set(new Uint8Array(samples.buffer), header.byteLength);

  return wav.buffer;
}

// Helper function to write a string to a DataView
function writeString(view: DataView, offset: number, string: string): void {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

// Function to save the watermark to the database
async function saveWatermarkToDatabase(
  filePath: string,
  watermarkText: string
): Promise<void> {
  await prisma.watermark.create({
    data: {
      assetId: filePath,
      watermark: watermarkText,
    },
  });
}

// // Example usage
// (async () => {
//   const inputFilePath = 'input.wav';
//   const outputFilePath = 'output_watermarked.wav';
//   const watermarkText = 'unique_watermark';

//   await embedWatermark(inputFilePath, outputFilePath, watermarkText);
//   console.log('Watermark embedded and saved successfully.');
// })();
