"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { Prisma, UserRole } from "@/lib/prisma/generated";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import {
  assetIncludes,
  AssetWithRelations,
  userIncludes,
  UserWithRelations,
} from "./dashboard-types";

export async function fetchDashboardData(): Promise<
  ActionResult<{ assets: AssetWithRelations[]; users: UserWithRelations[] }>
> {
  try {
    const actor = await requireUser();

    const qUser: Prisma.UserFindManyArgs =
      actor.role === UserRole.USER
        ? {
            where: { id: actor.id },
          }
        : {};

    const users = await prisma.user.findMany({
      ...qUser,
      include: userIncludes,
    });

    const qAsset: Prisma.AssetFindManyArgs =
      actor.role === UserRole.USER
        ? {
            where: { owner: { id: actor.id } },
          }
        : {};

    const assets = await prisma.asset.findMany({
      ...qAsset,
      include: assetIncludes,
    });

    return { ok: true, data: { users, assets } };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
