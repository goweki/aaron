"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { Prisma } from "@/lib/prisma/generated";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import {
  assetIncludes,
  AssetWithRelations,
  userIncludes,
  UserWithRelations,
} from "./dashboard-types";

export async function createAssetAction(
  input: Prisma.AssetUncheckedCreateInput,
): Promise<ActionResult<Prisma.AssetGetPayload<{}>>> {
  try {
    const actor = await requireUser();

    //     console.log("POST REQUEST: new asset: ", doc);
    //     // insert doc
    //     const res_ = await prisma.asset.create({ data: doc });

    //     return Response.json({ SUCCESS: "asset created", assetId: res_.id });
    //     //return Response.json({ FAILED: 'action NOT performed' });

    const asset = await prisma.asset.upsert({
      where: { id: input.id },
      create: { ...input },
      update: { ...input },
    });

    return { ok: true, data: asset };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
