"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { requireUser } from "@/lib/auth/auth-actions";
import { DetectionStatus, Prisma, UserRole } from "@/lib/prisma/generated";
import { ActionResult } from "@/types/action";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { detectionIncludes } from "./dashboard-types";

/**
 * Helper to enforce Admin/System privileges
 */
function assertAdminOrSystem(actor: { role: UserRole }) {
  if (actor.role !== UserRole.SYSTEM && actor.role !== UserRole.ADMINISTRATOR) {
    throw new Error("Unauthorized: Insufficient permissions.");
  }
}

/**
 * 1. Update status of a single detection (VERIFIED, REJECTED, PENDING)
 */
export async function updateDetectionStatusAction(
  detectionId: string,
  status: DetectionStatus,
): Promise<ActionResult<Prisma.DetectionGetPayload<{}>>> {
  try {
    const actor = await requireUser();
    assertAdminOrSystem(actor);

    if (!detectionId || !status) {
      return {
        ok: false,
        error: "Missing required fields (detectionId or status).",
      };
    }

    const updatedDetection = await prisma.detection.update({
      where: { id: detectionId },
      data: { status },
    });

    revalidatePath("/dashboard/detections");
    revalidatePath("/dashboard");

    return { ok: true, data: updatedDetection };
  } catch (error) {
    console.error("Failed to update detection status:", error);
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

/**
 * 2. Bulk update detection statuses
 */
export async function batchUpdateDetectionStatusAction(
  detectionIds: string[],
  status: DetectionStatus,
): Promise<ActionResult<{ count: number }>> {
  try {
    const actor = await requireUser();
    assertAdminOrSystem(actor);

    if (!detectionIds || detectionIds.length === 0) {
      return {
        ok: false,
        error: "No detection IDs provided for batch update.",
      };
    }

    const result = await prisma.detection.updateMany({
      where: { id: { in: detectionIds } },
      data: { status },
    });

    revalidatePath("/dashboard/detections");
    revalidatePath("/dashboard");

    return { ok: true, data: { count: result.count } };
  } catch (error) {
    console.error("Failed to batch update detections:", error);
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

/**
 * 3. Delete a detection record
 */
export async function deleteDetectionAction(
  detectionId: string,
): Promise<ActionResult<{ id: string }>> {
  try {
    const actor = await requireUser();

    if (!detectionId) {
      return { ok: false, error: "Detection ID is required." };
    }

    // Admins can delete any; Users can only delete detections of assets they own
    if (
      actor.role === UserRole.ADMINISTRATOR ||
      actor.role === UserRole.SYSTEM
    ) {
      await prisma.detection.delete({
        where: { id: detectionId },
      });
    } else {
      await prisma.detection.delete({
        where: {
          id: detectionId,
          asset: { ownerId: actor.id },
        },
      });
    }

    revalidatePath("/dashboard/detections");
    revalidatePath("/dashboard");

    return { ok: true, data: { id: detectionId } };
  } catch (error) {
    console.error("Failed to delete detection:", error);
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

/**
 * 4. Record new detection match payload
 */
export async function createDetectionAction(data: {
  assetId: string;
  broadcasterId: string;
  sessionId?: string;
  broadcastAt: Date;
  confidence: number;
  duration?: number;
  startOffset?: number;
  endOffset?: number;
  engineVersion?: string;
}): Promise<ActionResult<Prisma.DetectionGetPayload<{}>>> {
  try {
    const actor = await requireUser();
    assertAdminOrSystem(actor);

    const detection = await prisma.detection.create({
      data: {
        assetId: data.assetId,
        broadcasterId: data.broadcasterId,
        sessionId: data.sessionId || null,
        broadcastAt: data.broadcastAt,
        confidence: data.confidence,
        duration: data.duration,
        startOffset: data.startOffset,
        endOffset: data.endOffset,
        engineVersion: data.engineVersion || "1.0.4",
        status: DetectionStatus.PENDING,
      },
    });

    revalidatePath("/dashboard/detections");
    revalidatePath("/dashboard");

    return { ok: true, data: detection };
  } catch (error) {
    console.error("Failed to create detection:", error);
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

/**
 * 5. Fetch detections
 */
export async function getDetectionsAction(
  whereDetection?: Prisma.DetectionWhereInput,
): Promise<
  ActionResult<
    Prisma.DetectionGetPayload<{
      include: typeof detectionIncludes;
    }>[]
  >
> {
  const actor = await requireUser();

  try {
    const detections = await prisma.detection.findMany({
      where: {
        ...whereDetection,
        ...(actor.role !== UserRole.ADMINISTRATOR &&
        actor.role !== UserRole.SYSTEM
          ? { asset: { ownerId: actor.id } }
          : {}),
      },
      include: detectionIncludes,
      orderBy: {
        createdAt: "desc",
      },
    });

    return { ok: true, data: detections };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
