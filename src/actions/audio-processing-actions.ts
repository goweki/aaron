"use server";

import { spawn } from "child_process";
import { Readable } from "stream";
import { Codegen as AudioFingerprinter } from "stream-audio-fingerprint";

import prisma from "@/lib/prisma";
import { ActionResult } from "@/types/action";
import { Prisma } from "@/lib/prisma/generated";
import { requireUser } from "@/lib/auth/auth-actions";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";

type FingerprintPoint = {
  time: number;
  fingerprint: number;
};

export async function generateAudioFingerprint(
  formData: FormData,
): Promise<ActionResult<number>> {
  try {
    const assetId = formData.get("assetId") as string | null;
    const audioFile = formData.get("file") as File | null;

    if (!assetId || !audioFile) {
      return {
        ok: false,
        error: "Missing required form fields (assetId or file).",
      };
    }

    // Ensure asset exists
    const asset = await prisma.asset.findUnique({
      where: { id: assetId },
      select: { id: true },
    });

    if (!asset) {
      return {
        ok: false,
        error: "Asset not found.",
      };
    }

    console.log("Generating fingerprint for asset:", assetId);

    // Read file once before starting the stream pipeline
    const audioBuffer = Buffer.from(await audioFile.arrayBuffer());

    const fingerprintResult = await new Promise<{
      ok: boolean;
      count: number;
    }>((resolve, reject) => {
      const fingerprinter = new AudioFingerprinter();

      const decoder = spawn(
        "ffmpeg",
        [
          "-i",
          "pipe:0",
          "-acodec",
          "pcm_s16le",
          "-ar",
          "22050",
          "-ac",
          "1",
          "-f",
          "wav",
          "-v",
          "fatal",
          "pipe:1",
        ],
        {
          stdio: ["pipe", "pipe", "inherit"],
        },
      );

      const fingerprint: FingerprintPoint[] = [];

      decoder.stdout.pipe(fingerprinter);

      Readable.from(audioBuffer).pipe(decoder.stdin);

      decoder.once("error", reject);

      decoder.once("close", (code) => {
        if (code !== 0) {
          reject(new Error(`ffmpeg exited with code ${code}`));
        }
      });

      fingerprinter.on("data", (data) => {
        for (let i = 0; i < data.tcodes.length; i++) {
          fingerprint.push({
            time: data.tcodes[i],
            fingerprint: data.hcodes[i],
          });
        }
      });

      fingerprinter.once("end", async () => {
        try {
          await prisma.audioFingerprint.upsert({
            where: {
              assetId,
            },
            update: {
              fingerprint,
              algorithm: "stream-audio-fingerprint",
              version: "1.0-22050hz",
            },
            create: {
              assetId,
              fingerprint,
              algorithm: "stream-audio-fingerprint",
              version: "1.0-22050hz",
            },
          });

          decoder.kill();

          resolve({
            ok: true,
            count: fingerprint.length,
          });
        } catch (error) {
          decoder.kill();
          reject(error);
        }
      });

      fingerprinter.once("error", (error) => {
        decoder.kill();
        reject(error);
      });
    });

    return {
      ok: true,
      data: fingerprintResult.count,
    };
  } catch (error) {
    console.error("Fingerprint generation failed:", error);

    return {
      ok: false,
      error: getFriendlyErrorMessage(error),
    };
  }
}

// Function to save the watermark to the database
export async function saveWatermarkToDatabase(
  filePath: string,
  watermarkText: string,
  algorithm: string,
): Promise<ActionResult<Prisma.WatermarkGetPayload<{}>>> {
  requireUser();
  try {
    const watermark = await prisma.watermark.create({
      data: {
        assetId: filePath,
        payload: watermarkText,
        algorithm,
      },
    });

    return { ok: true, data: watermark };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
