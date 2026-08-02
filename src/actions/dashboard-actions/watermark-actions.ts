"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { ActionResult } from "@/types/action";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { revalidatePath } from "next/cache";
import { Prisma, UserRole } from "@/lib/prisma/generated";
import { embedWatermark } from "@/lib/audio/watermark";

function assertAdminOrSystem(actor: { role: UserRole }) {
  if (actor.role !== UserRole.ADMINISTRATOR && actor.role !== UserRole.SYSTEM) {
    throw new Error("Unauthorized: insufficient permissions.");
  }
}

export async function getWatermarksAction(): Promise<
  ActionResult<
    Prisma.WatermarkGetPayload<{
      include: { asset: true };
    }>[]
  >
> {
  await requireUser();

  try {
    const watermarks = await prisma.watermark.findMany({
      include: { asset: true },
      orderBy: { embeddedAt: "desc" },
    });
    return { ok: true, data: watermarks };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function embedWatermarkAction(input: {
  assetId: string;
  payload: string;
}): Promise<
  ActionResult<{
    assetId: string;
    artifactPath: string;
    algorithm: string;
  }>
> {
  const actor = await requireUser();
  assertAdminOrSystem(actor);

  if (!input.assetId || !input.payload.trim()) {
    return {
      ok: false,
      error: "Asset ID and watermark payload are required.",
    };
  }

  try {
    const asset = await prisma.asset.findUnique({
      where: { id: input.assetId },
      select: { id: true, filename: true },
    });

    if (!asset) {
      return { ok: false, error: "Asset not found." };
    }

    const tempDir = process.env.WATERMARK_TEMP_PATH || "/temp";
    const sanitizedFile =
      asset.filename?.replace(/[^a-zA-Z0-9._-]/g, "_") || asset.id;
    const outputFile = `${tempDir}/${asset.id}-watermarked.wav`;

    await embedWatermark({
      inputFilePath: outputFile,
      outputFilePath: outputFile,
      payload: input.payload.trim(),
    });

    await prisma.watermark.upsert({
      where: { assetId: asset.id },
      create: {
        assetId: asset.id,
        algorithm: "spread-spectrum-lsb-v1",
        payload: input.payload.trim(),
      },
      update: {
        payload: input.payload.trim(),
        algorithm: "spread-spectrum-lsb-v1",
      },
    });

    revalidatePath("/dashboard/watermarks");
    revalidatePath("/dashboard/assets");

    return {
      ok: true,
      data: {
        assetId: asset.id,
        artifactPath: outputFile,
        algorithm: "spread-spectrum-lsb-v1",
      },
    };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
