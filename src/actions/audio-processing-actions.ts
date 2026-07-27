"use server";

import { spawn } from "child_process";
import { Readable } from "stream";
// @ts-ignore
import { Codegen as AudioFingerprinter } from "stream-audio-fingerprint";

import prisma from "@/lib/prisma";
import { ActionResult } from "@/types/action";
import { Prisma } from "@/lib/prisma/generated";
import { requireUser } from "@/lib/auth/auth-actions";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";

type ExtractedHashPoint = {
  tcode: number;
  hcode: number;
};

export async function generateAudioFingerprint(
  formData: FormData,
): Promise<ActionResult<number>> {
  await requireUser();

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

    // Read audio file buffer
    const audioBuffer = Buffer.from(await audioFile.arrayBuffer());

    // 1. Extract fingerprints from audio stream
    const extractedPoints = await new Promise<ExtractedHashPoint[]>(
      (resolve, reject) => {
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

        const points: ExtractedHashPoint[] = [];

        decoder.stdout.pipe(fingerprinter);
        Readable.from(audioBuffer).pipe(decoder.stdin);

        decoder.once("error", reject);

        decoder.once("close", (code) => {
          if (code !== 0) {
            reject(new Error(`FFmpeg process exited with code ${code}`));
          }
        });

        fingerprinter.on(
          "data",
          (data: { tcodes: number[]; hcodes: number[] }) => {
            for (let i = 0; i < data.tcodes.length; i++) {
              points.push({
                tcode: data.tcodes[i],
                hcode: data.hcodes[i],
              });
            }
          },
        );

        fingerprinter.once("end", () => {
          decoder.kill();
          resolve(points);
        });

        fingerprinter.once("error", (error: Error) => {
          decoder.kill();
          reject(error);
        });
      },
    );

    if (extractedPoints.length === 0) {
      return {
        ok: false,
        error:
          "No audio landmark fingerprints could be generated from this file.",
      };
    }

    // 2. Persist AudioFingerprint and individual FingerprintHashes in a transaction
    await prisma.$transaction(async (tx) => {
      // Create or update parent metadata record
      const audioFingerprint = await tx.audioFingerprint.upsert({
        where: { assetId },
        update: {
          algorithm: "landmark",
          version: "1.0-22050hz",
        },
        create: {
          assetId,
          algorithm: "landmark",
          version: "1.0-22050hz",
        },
      });

      // Clear existing landmark hashes if re-fingerprinting
      await tx.fingerprintHash.deleteMany({
        where: { assetId },
      });

      // Prepare optimized batch insert
      const hashData = extractedPoints.map((p) => ({
        hash: BigInt(p.hcode),
        offsetMs: p.tcode,
        audioFingerprintId: audioFingerprint.id,
        assetId,
      }));

      // High-speed bulk insertion
      await tx.fingerprintHash.createMany({
        data: hashData,
      });
    });

    return {
      ok: true,
      data: extractedPoints.length,
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
  assetId: string,
  watermarkText: string,
  algorithm: string,
): Promise<ActionResult<Prisma.WatermarkGetPayload<{}>>> {
  await requireUser();

  try {
    const watermark = await prisma.watermark.upsert({
      where: { assetId },
      update: {
        payload: watermarkText,
        algorithm,
      },
      create: {
        assetId,
        payload: watermarkText,
        algorithm,
      },
    });

    return { ok: true, data: watermark };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
