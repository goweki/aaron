"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { Prisma, Status, UserRole } from "@/lib/prisma/generated";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import { assetIncludes, AssetWithRelations } from "./dashboard-types";
import { revalidatePath } from "next/cache";

export async function createAssetAction(
  input: Prisma.AssetUncheckedCreateInput,
): Promise<ActionResult<Prisma.AssetGetPayload<{}>>> {
  const actor = await requireUser();

  try {
    const asset = await prisma.asset.upsert({
      where: { id: input.id ?? "" },
      create: { ...input },
      update: { ...input },
    });

    // Refresh page data automatically
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
