"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { ActionResult } from "@/types/action";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import {
  MonitoringSession,
  Prisma,
  Status,
  UserRole,
} from "@/lib/prisma/generated";
import { revalidatePath } from "next/cache";

function assertAdminOrSystem(actor: { role: UserRole }) {
  if (actor.role !== UserRole.ADMINISTRATOR && actor.role !== UserRole.SYSTEM) {
    throw new Error("Unauthorized: insufficient permissions.");
  }
}

export async function getMonitoringSessionsAction(): Promise<
  ActionResult<
    Prisma.MonitoringSessionGetPayload<{
      include: { broadcaster: true; detections: true };
    }>[]
  >
> {
  const actor = await requireUser();
  try {
    const sessions = await prisma.monitoringSession.findMany({
      include: { broadcaster: true, detections: true },
      orderBy: { startedAt: "desc" },
    });
    return { ok: true, data: sessions };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function getMonitoringSessionByIdAction(id: string): Promise<
  ActionResult<Prisma.MonitoringSessionGetPayload<{
    include: { broadcaster: true; detections: true };
  }> | null>
> {
  await requireUser();
  try {
    const session = await prisma.monitoringSession.findUnique({
      where: { id },
      include: { broadcaster: true, detections: true },
    });
    return { ok: true, data: session };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export interface CreateMonitoringSessionInput {
  broadcasterId: string;
  audioLink?: string | null;
  startedAt: Date;
  endedAt?: Date | null;
  status?: Status;
}

export async function createMonitoringSessionAction(
  input: CreateMonitoringSessionInput,
): Promise<ActionResult<Prisma.MonitoringSessionGetPayload<{}>>> {
  const actor = await requireUser();
  assertAdminOrSystem(actor);

  try {
    const session = await prisma.monitoringSession.create({
      data: {
        broadcaster: { connect: { id: input.broadcasterId } },
        audioLink: input.audioLink,
        startedAt: input.startedAt,
        endedAt: input.endedAt || null,
        status: input.status ?? Status.ACTIVE,
      },
    });

    revalidatePath("/dashboard/monitor");
    revalidatePath("/dashboard");
    return { ok: true, data: session };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function updateMonitoringSessionAction(
  id: string,
  input: Prisma.MonitoringSessionUpdateInput,
): Promise<ActionResult<Prisma.MonitoringSessionGetPayload<{}>>> {
  const actor = await requireUser();
  assertAdminOrSystem(actor);

  try {
    const session = await prisma.monitoringSession.update({
      where: { id },
      data: {
        audioLink: input.audioLink,
        endedAt: input.endedAt,
        status: input.status,
      },
    });

    revalidatePath("/dashboard/monitor");
    revalidatePath("/dashboard");
    return { ok: true, data: session };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function deleteMonitoringSessionAction(
  id: string,
): Promise<ActionResult<{ id: string }>> {
  const actor = await requireUser();
  assertAdminOrSystem(actor);

  try {
    await prisma.monitoringSession.delete({ where: { id } });
    revalidatePath("/dashboard/monitor");
    revalidatePath("/dashboard");
    return { ok: true, data: { id } };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
