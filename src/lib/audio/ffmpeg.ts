import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";

export interface FfmpegResult {
  code: number;
  stdout: Buffer;
  stderr: Buffer;
}

export async function ensureDir(dir: string) {
  await mkdir(dir, { recursive: true });
}

export function replaceExtension(file: string, ext: string) {
  return path.join(
    /*turbopackIgnore: true*/ path.dirname(file),
    `${path.parse(file).name}.${ext}`,
  );
}

export function runFfmpeg(
  args: string[],
  cwd = process.cwd(),
): Promise<FfmpegResult> {
  return new Promise((resolve, reject) => {
    const child = spawn("ffmpeg", ["-y", ...args], { cwd });

    const stdout: Buffer[] = [];
    const stderr: Buffer[] = [];

    child.stdout.on("data", (d) => stdout.push(Buffer.from(d)));
    child.stderr.on("data", (d) => stderr.push(Buffer.from(d)));
    child.on("error", reject);

    child.on("close", (code) => {
      const result = {
        code: code ?? -1,
        stdout: Buffer.concat(stdout),
        stderr: Buffer.concat(stderr),
      };
      if (result.code !== 0) {
        reject(
          new Error(
            result.stderr.toString() ||
              `ffmpeg exited with code ${result.code}`,
          ),
        );
      } else {
        resolve(result);
      }
    });
  });
}

export async function decodeToWav(input: string, outputWav: string) {
  await ensureDir(path.dirname(outputWav));
  await runFfmpeg([
    "-i",
    input,
    "-acodec",
    "pcm_f32le",
    "-ac",
    "2",
    "-ar",
    "44100",
    outputWav,
  ]);
}

export async function encodeFromWav(inputWav: string, output: string) {
  await ensureDir(path.dirname(output));
  await runFfmpeg(["-i", inputWav, "-c:a", "libmp3lame", "-q:a", "2", output]);
}
