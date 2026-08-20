"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { UserRole } from "@/lib/prisma/generated";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import {
  assetIncludes,
  AssetWithRelations,
  BroadcasterWithRelations,
  userIncludes,
  UserWithRelations,
} from "./dashboard-types";
import { ClosedData } from "@/components/providers";

// export async function fetchDashboardData(): Promise<
//   ActionResult<{
//     assets: AssetWithRelations[];
//     users: UserWithRelations[];
//     broadcasters: BroadcasterWithRelations[];
//   }>
// > {
//   const actor = await requireUser();

//   try {
//     const isRegularUser = actor.role === UserRole.USER;

//     // Run queries in parallel to eliminate waterfall latency
//     const [users, assets, broadcasters] = await Promise.all([
//       prisma.user.findMany({
//         where: isRegularUser ? { id: actor.id } : undefined,
//         include: userIncludes,
//       }),
//       prisma.asset.findMany({
//         // Filter by ownerId foreign key directly instead of joining the relation table
//         where: isRegularUser ? { ownerId: actor.id } : undefined,
//         include: assetIncludes,
//       }),
//       prisma.broadcaster.findMany({
//         include: { monitoringSessions: true, detections: true },
//       }),
//     ]);

//     return { ok: true, data: { users, assets, broadcasters } };
//   } catch (error) {
//     return { ok: false, error: getFriendlyErrorMessage(error) };
//   }
// }

export async function fetchDashboardCounts(): Promise<
  ActionResult<ClosedData>
> {
  const actor = await requireUser();

  try {
    const isRegularUser = actor.role === UserRole.USER;

    const [userCount, assetCount, broadcasterCount, detectionsCount] =
      await Promise.all([
        prisma.user.count({
          where: isRegularUser ? { id: actor.id } : undefined,
        }),
        prisma.asset.count({
          where: isRegularUser ? { ownerId: actor.id } : undefined,
        }),
        prisma.broadcaster.count(),
        prisma.detection.count({
          where: isRegularUser
            ? {
                asset: {
                  ownerId: actor.id,
                },
              }
            : undefined,
        }),
      ]);

    return {
      ok: true,
      data: {
        userCount,
        assetCount,
        broadcasterCount,
        detectionsCount,
      },
    };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
