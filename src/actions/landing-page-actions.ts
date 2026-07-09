"use server";

import prisma from "@/lib/prisma";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";

export async function fetchOpenStatistics(): Promise<
  ActionResult<{ assets: number; detections: number }>
> {
  try {
    const assets = await prisma.asset.findMany();
    const detections = await prisma.detection.findMany();

    return {
      ok: true,
      data: { assets: assets.length, detections: detections.length },
    };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
