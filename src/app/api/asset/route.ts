import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust path to match your Prisma client location
import { extractFingerprints } from "@/lib/audio/fingerprint";

// FORCE Node.js runtime to enable child_process (ffmpeg) and native streams
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string | null;
    const ownerId = formData.get("ownerId") as string | null;

    // Optional metadata
    const artist = (formData.get("artist") as string) || null;
    const album = (formData.get("album") as string) || null;
    const description = (formData.get("description") as string) || "";
    const isrc = (formData.get("isrc") as string) || null;

    if (!file || !title || !ownerId) {
      return NextResponse.json(
        { error: "Missing required fields: file, title, ownerId" },
        { status: 400 },
      );
    }

    // 1. Convert uploaded file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. Extract landmark fingerprints using stream-audio-fingerprint & FFmpeg
    const fingerprints = await extractFingerprints(buffer);

    if (fingerprints.length === 0) {
      return NextResponse.json(
        {
          error:
            "Failed to extract fingerprints. Check if audio file is valid.",
        },
        { status: 422 },
      );
    }

    // 3. Save Asset, AudioFingerprint, and FingerprintHashes in a database transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the Asset record
      const asset = await tx.asset.create({
        data: {
          title,
          artist,
          album,
          description,
          isrc,
          filename: file.name,
          fileSize: file.size,
          ownerId,
          status: "ACTIVE",
          type: "MUSIC",
        },
      });

      // Create the parent AudioFingerprint metadata record
      const audioFingerprint = await tx.audioFingerprint.create({
        data: {
          assetId: asset.id,
          algorithm: "landmark",
          version: "1.0.4",
        },
      });

      // Prepare batch data for FingerprintHash inserts
      const hashData = fingerprints.map((f) => ({
        hash: BigInt(f.hcode),
        offsetMs: f.tcode,
        audioFingerprintId: audioFingerprint.id,
        assetId: asset.id,
      }));

      // High-speed batch insertion using createMany
      await tx.fingerprintHash.createMany({
        data: hashData,
      });

      return {
        assetId: asset.id,
        title: asset.title,
        fingerprintsCount: fingerprints.length,
      };
    });

    return NextResponse.json(
      {
        success: true,
        message: "Asset indexed and fingerprinted successfully.",
        data: result,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Error in /api/index-track:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
