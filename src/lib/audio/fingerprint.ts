import { spawn } from "child_process";
// @ts-ignore - stream-audio-fingerprint doesn't ship with full TS definitions
import { Codegen } from "stream-audio-fingerprint";

export interface AudioFingerprintSample {
  tcode: number; // Time offset in milliseconds
  hcode: number; // 32-bit integer hash code
}

/**
 * Extracts acoustic landmark fingerprints from an audio Buffer.
 * Transcodes input to 22.05kHz, Mono, 16-bit PCM WAV on the fly via FFmpeg.
 */
export async function extractFingerprints(
  buffer: Buffer,
): Promise<AudioFingerprintSample[]> {
  return new Promise((resolve, reject) => {
    // 1. Spawn FFmpeg process to convert audio to exact format required by algorithm
    const decoder = spawn("ffmpeg", [
      "-i",
      "pipe:0", // Input from stdin buffer
      "-acodec",
      "pcm_s16le", // Uncompressed 16-bit PCM
      "-ar",
      "22050", // Sample rate: 22.05 kHz
      "-ac",
      "1", // Mono channel
      "-f",
      "wav", // WAV container
      "-v",
      "fatal", // Silence standard output logs
      "pipe:1", // Stream output to stdout
    ]);

    const fingerprinter = new Codegen();
    const fingerprints: AudioFingerprintSample[] = [];

    // 2. Pipe FFmpeg output into fingerprinter stream
    decoder.stdout.pipe(fingerprinter);

    fingerprinter.on("data", (data: { tcodes: number[]; hcodes: number[] }) => {
      for (let i = 0; i < data.tcodes.length; i++) {
        fingerprints.push({
          tcode: data.tcodes[i],
          hcode: data.hcodes[i],
        });
      }
    });

    fingerprinter.on("end", () => resolve(fingerprints));

    // Handle error events
    decoder.on("error", (err) =>
      reject(new Error(`FFmpeg error: ${err.message}`)),
    );
    fingerprinter.on("error", (err: any) =>
      reject(new Error(`Fingerprint error: ${err.message}`)),
    );

    // 3. Write input buffer to FFmpeg's standard input stream
    decoder.stdin.write(buffer);
    decoder.stdin.end();
  });
}
