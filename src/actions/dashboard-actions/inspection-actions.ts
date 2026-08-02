"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import { Prisma, UserRole } from "@/lib/prisma/generated";

export async function getAssetByIdAction(assetId: string): Promise<
  ActionResult<
    Prisma.AssetGetPayload<{
      include: {
        owner: true;
        fingerprint: true;
        hashes: true;
        watermark: true;
        detections: { include: { broadcaster: true; session: true } };
      };
    }>
  >
> {
  const actor = await requireUser();

  try {
    const asset = await prisma.asset.findUnique({
      where: { id: assetId },
      include: {
        owner: true,
        fingerprint: true,
        hashes: true,
        watermark: true,
        detections: { include: { broadcaster: true, session: true } },
      },
    });

    if (!asset) {
      return { ok: false, error: "Asset not found." };
    }

    if (
      actor.role !== UserRole.ADMINISTRATOR &&
      actor.role !== UserRole.SYSTEM &&
      asset.ownerId !== actor.id
    ) {
      return { ok: false, error: "Unauthorized to view this asset." };
    }

    return { ok: true, data: asset };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function getDetectionByIdAction(detectionId: string): Promise<
  ActionResult<
    Prisma.DetectionGetPayload<{
      include: {
        asset: { include: { owner: true; fingerprint: true; watermark: true } };
        broadcaster: true;
        session: true;
      };
    }>
  >
> {
  const actor = await requireUser();

  try {
    const detection = await prisma.detection.findUnique({
      where: { id: detectionId },
      include: {
        asset: { include: { owner: true, fingerprint: true, watermark: true } },
        broadcaster: true,
        session: true,
      },
    });

    if (!detection) {
      return { ok: false, error: "Detection not found." };
    }

    if (
      actor.role !== UserRole.ADMINISTRATOR &&
      actor.role !== UserRole.SYSTEM &&
      detection.asset.ownerId !== actor.id
    ) {
      return { ok: false, error: "Unauthorized to view this detection." };
    }

    return { ok: true, data: detection };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
