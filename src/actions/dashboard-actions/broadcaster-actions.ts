"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import { BroadcasterWithRelations } from "./dashboard-types";
import { Prisma, Status, UserRole } from "@/lib/prisma/generated";
import { revalidatePath } from "next/cache";

function assertAdminOrSystem(actor: { role: UserRole }) {
  if (actor.role !== UserRole.ADMINISTRATOR && actor.role !== UserRole.SYSTEM) {
    throw new Error("Unauthorized: insufficient permissions.");
  }
}

export async function getBroadcastersAction(): Promise<
  ActionResult<BroadcasterWithRelations[]>
> {
  const actor = await requireUser();

  try {
    const broadcasters = await prisma.broadcaster.findMany({
      where:
        actor.role === UserRole.USER
          ? { status: { not: Status.DELETED } }
          : undefined,
      include: { monitoringSessions: true, detections: true },
      orderBy: { createdAt: "desc" },
    });
    return { ok: true, data: broadcasters };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function getBroadcasterByIdAction(
  broadcasterId: string,
): Promise<ActionResult<BroadcasterWithRelations | null>> {
  await requireUser();

  try {
    const broadcaster = await prisma.broadcaster.findUnique({
      where: { id: broadcasterId },
      include: { monitoringSessions: true, detections: true },
    });

    return { ok: true, data: broadcaster };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function createBroadcasterAction(
  input: Prisma.BroadcasterCreateInput,
): Promise<ActionResult<Prisma.BroadcasterGetPayload<{}>>> {
  const actor = await requireUser();
  assertAdminOrSystem(actor);

  try {
    const broadcaster = await prisma.broadcaster.create({
      data: {
        name: input.name,
        description: input.description || null,
        website: input.website || null,
        streamUrl: input.streamUrl || null,
        country: input.country || null,
        frequency: input.frequency || null,
        status: input.status ?? Status.ACTIVE,
      },
    });

    revalidatePath("/dashboard/broadcasters");
    revalidatePath("/dashboard");
    return { ok: true, data: broadcaster };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function updateBroadcasterAction(
  id: string,
  input: Prisma.BroadcasterUpdateInput,
): Promise<ActionResult<Prisma.BroadcasterGetPayload<{}>>> {
  const actor = await requireUser();
  assertAdminOrSystem(actor);

  try {
    const broadcaster = await prisma.broadcaster.update({
      where: { id },
      data: {
        name: input.name,
        description: input.description,
        website: input.website,
        streamUrl: input.streamUrl,
        country: input.country,
        frequency: input.frequency,
        status: input.status,
      },
    });

    revalidatePath("/dashboard/broadcasters");
    revalidatePath("/dashboard");
    return { ok: true, data: broadcaster };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function deleteBroadcasterAction(
  id: string,
): Promise<ActionResult<{ id: string }>> {
  const actor = await requireUser();
  assertAdminOrSystem(actor);

  try {
    await prisma.broadcaster.delete({ where: { id } });
    revalidatePath("/dashboard/broadcasters");
    revalidatePath("/dashboard");
    return { ok: true, data: { id } };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
