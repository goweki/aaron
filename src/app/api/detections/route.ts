export const revalidate = 3600; //hourly

import { NextRequest, NextResponse } from "next/server";
import {
  apiKeyMiddleware,
  type AuthenticatedHandler,
} from "@/lib/auth/token-handlers";
import prisma from "@/lib/prisma";
import { Prisma, UserRole } from "@/lib/prisma/generated";
import { ActionResult } from "@/types/action";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";

const getDetections: AuthenticatedHandler = async (request, auth) => {
  try {
    const { user } = auth;

    const whereQ: Prisma.DetectionWhereInput | undefined =
      user.role === UserRole.USER
        ? { asset: { owner: { id: user.id } } }
        : undefined;

    const detections = await prisma.detection.findMany({
      where: whereQ,
      include: { asset: true },
    });

    const res: ActionResult<unknown> = { ok: true, data: detections };

    return NextResponse.json(res);
  } catch (error) {
    const res: ActionResult<unknown> = {
      ok: false,
      error: getFriendlyErrorMessage(error),
    };

    return NextResponse.json(res, { status: (error as any).status || 500 });
  }
};

export const GET = apiKeyMiddleware(getDetections);
