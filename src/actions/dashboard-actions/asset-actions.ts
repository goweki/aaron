"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createHash, randomUUID } from "node:crypto";
import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { Prisma, Status, UserRole } from "@/lib/prisma/generated";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import { assetIncludes, AssetWithRelations } from "./dashboard-types";
import { revalidatePath } from "next/cache";
import { extractFingerprints } from "@/lib/audio/fingerprint";
import { embedWatermark } from "@/lib/watermark";

export interface IndexAssetInput {
  file: File;
  title: string;
  artist?: string;
  album?: string;
  watermarkPayload?: string;
}

export async function indexAssetAction(
  input: IndexAssetInput,
): Promise<ActionResult<{ assetId: string; fingerprintsCount: number }>> {
  try {
    const actor = await requireUser();
    const title = input.title.trim();

    if (!input.file || !title) {
      return {
        ok: false,
        error: "An audio file and track title are required.",
      };
    }

    const fingerprints = await extractFingerprints(
      Buffer.from(await input.file.arrayBuffer()),
    );
    if (fingerprints.length === 0) {
      return {
        ok: false,
        error: "No landmark hashes could be extracted from this audio file.",
      };
    }

    const assetId = randomUUID();
    const assetDirectory =
      process.env.ASSET_STORAGE_PATH ?? "/tmp/aaron-assets";
    const assetFolder = path.join(assetDirectory, assetId);
    const assetFileName = `${assetId}${path.extname(input.file.name) || ".wav"}`;
    const assetFilePath = path.join(assetFolder, assetFileName);

    await mkdir(assetFolder, { recursive: true });
    await writeFile(assetFilePath, Buffer.from(await input.file.arrayBuffer()));

    const result = await prisma.$transaction(async (tx) => {
      const asset = await tx.asset.create({
        data: {
          id: assetId,
          title,
          artist: input.artist?.trim() || null,
          album: input.album?.trim() || null,
          filename: input.file.name,
          file: assetFilePath,
          fileSize: input.file.size,
          ownerId: actor.id,
          status: Status.ACTIVE,
          type: "MUSIC",
        },
      });
      const fingerprint = await tx.audioFingerprint.create({
        data: { assetId: asset.id, algorithm: "landmark", version: "1.0.4" },
      });
      await tx.fingerprintHash.createMany({
        data: fingerprints.map((item) => ({
          hash: BigInt(item.hcode),
          offsetMs: item.tcode,
          audioFingerprintId: fingerprint.id,
          assetId: asset.id,
        })),
      });
      if (input.watermarkPayload?.trim()) {
        await tx.watermark.create({
          data: {
            assetId: asset.id,
            algorithm: "metadata-payload",
            payload: input.watermarkPayload.trim(),
          },
        });
      }
      return { assetId: asset.id, fingerprintsCount: fingerprints.length };
    });

    revalidatePath("/dashboard/assets");
    revalidatePath("/dashboard");
    return { ok: true, data: result };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function createAssetAction(
  input: Prisma.AssetUncheckedCreateInput,
): Promise<ActionResult<Prisma.AssetGetPayload<{}>>> {
  const actor = await requireUser();

  if (!input.title || !input.filename || !input.fileSize) {
    return { ok: false, error: "Title, filename, and filesize are required." };
  }

  if (
    actor.role !== UserRole.ADMINISTRATOR &&
    actor.role !== UserRole.SYSTEM &&
    input.ownerId &&
    input.ownerId !== actor.id
  ) {
    return { ok: false, error: "Unauthorized operation." };
  }

  try {
    const asset = await prisma.asset.upsert({
      where: { id: input.id ?? "" },
      create: {
        ...input,
        ownerId:
          actor.role === UserRole.ADMINISTRATOR ||
          actor.role === UserRole.SYSTEM
            ? (input.ownerId ?? actor.id)
            : actor.id,
      },
      update: {
        ...input,
        ownerId:
          actor.role === UserRole.ADMINISTRATOR ||
          actor.role === UserRole.SYSTEM
            ? (input.ownerId ?? actor.id)
            : actor.id,
      },
    });

    revalidatePath("/dashboard/assets");
    return { ok: true, data: asset };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function toggleAssetStatusAction(
  id: string,
): Promise<ActionResult<Prisma.AssetGetPayload<{}>>> {
  const actor = await requireUser();

  try {
    // 1. Verify existence and ownership
    const existingAsset = await prisma.asset.findFirst({
      where: {
        id,
        ...(actor.role !== UserRole.ADMINISTRATOR &&
          actor.role !== UserRole.SYSTEM && { ownerId: actor.id }),
      },
    });

    if (!existingAsset) {
      return { ok: false, error: "Asset not found or unauthorized" };
    }

    // 2. Determine new status (assuming active status vs inactive/disabled)
    const newStatus =
      existingAsset.status === Status.ACTIVE ? Status.INACTIVE : Status.ACTIVE;

    // 3. Update asset
    const updatedAsset = await prisma.asset.update({
      where: { id },
      data: { status: newStatus },
    });

    // Refresh page data automatically
    revalidatePath("/dashboard/assets");
    return { ok: true, data: updatedAsset };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function deleteAssetAction(
  id: string,
): Promise<ActionResult<Prisma.AssetGetPayload<{}>>> {
  const actor = await requireUser();

  try {
    // Fixed nested where bug -> using findFirst with proper condition
    const asset = await prisma.asset.findFirst({
      where: {
        id,
        ...(actor.role !== UserRole.ADMINISTRATOR &&
          actor.role !== UserRole.SYSTEM && { ownerId: actor.id }),
      },
    });

    if (!asset) {
      return { ok: false, error: "Asset not found or unauthorized" };
    }

    await prisma.asset.delete({
      where: { id: asset.id },
    });

    // Refresh page data automatically
    revalidatePath("/dashboard/assets");
    return { ok: true, data: asset };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function getAssetsAction(): Promise<
  ActionResult<AssetWithRelations[]>
> {
  const actor = await requireUser();

  try {
    const assets = await prisma.asset.findMany({
      where:
        actor.role !== UserRole.ADMINISTRATOR && actor.role !== UserRole.SYSTEM
          ? { ownerId: actor.id }
          : undefined,
      include: assetIncludes,
    });

    return { ok: true, data: assets };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
