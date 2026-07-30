"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { Prisma, Status, UserRole } from "@/lib/prisma/generated";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import { revalidatePath } from "next/cache";

export async function createUserAction(
  input: Prisma.UserUncheckedCreateInput,
): Promise<ActionResult<Prisma.UserGetPayload<{}>>> {
  const actor = await requireUser();

  // Ensure only administrators or system accounts can create users
  if (actor.role !== UserRole.ADMINISTRATOR && actor.role !== UserRole.SYSTEM) {
    return { ok: false, error: "Unauthorized operation" };
  }

  try {
    const user = await prisma.user.upsert({
      where: { id: input.id ?? "" },
      create: { ...input },
      update: { ...input },
    });

    revalidatePath("/dashboard/users");
    return { ok: true, data: user };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function toggleUserStatusAction(
  id: string,
): Promise<ActionResult<Prisma.UserGetPayload<{}>>> {
  const actor = await requireUser();

  // Ensure only administrators or system accounts can toggle user status
  if (actor.role !== UserRole.ADMINISTRATOR && actor.role !== UserRole.SYSTEM) {
    return { ok: false, error: "Unauthorized operation" };
  }

  try {
    // 1. Verify existence
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return { ok: false, error: "User not found" };
    }

    // Prevents self-deactivation by administrators
    if (existingUser.id === actor.id) {
      return { ok: false, error: "You cannot toggle your own account status" };
    }

    // 2. Determine new status
    const newStatus =
      existingUser.status === Status.ACTIVE ? Status.INACTIVE : Status.ACTIVE;

    // 3. Update user status
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { status: newStatus },
    });

    revalidatePath("/dashboard/users");
    return { ok: true, data: updatedUser };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function deleteUserAction(
  id: string,
): Promise<ActionResult<Prisma.UserGetPayload<{}>>> {
  const actor = await requireUser();

  // Ensure only administrators or system accounts can delete users
  if (actor.role !== UserRole.ADMINISTRATOR && actor.role !== UserRole.SYSTEM) {
    return { ok: false, error: "Unauthorized operation" };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return { ok: false, error: "User not found" };
    }

    // Prevents self-deletion by administrators
    if (user.id === actor.id) {
      return { ok: false, error: "You cannot delete your own account" };
    }

    await prisma.user.delete({
      where: { id: user.id },
    });

    revalidatePath("/dashboard/users");
    return { ok: true, data: user };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function getUsersAction(
  whereUser?: Prisma.UserWhereInput,
): Promise<
  ActionResult<Prisma.UserGetPayload<{ include: { assets: true } }>[]>
> {
  const actor = await requireUser();

  try {
    const users = await prisma.user.findMany({
      where: {
        ...whereUser,
        ...(actor.role !== UserRole.ADMINISTRATOR &&
        actor.role !== UserRole.SYSTEM
          ? { id: actor.id }
          : {}),
      },
      include: {
        assets: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { ok: true, data: users };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function getUserByKey(
  key: string,
): Promise<
  ActionResult<Prisma.UserGetPayload<{ include: { assets: true } }> | null>
> {
  const actor = await requireUser();

  try {
    const user = await prisma.user.findFirst({
      where: {
        ...{ OR: [{ email: key }, { id: key }] },
        ...(actor.role !== UserRole.ADMINISTRATOR &&
        actor.role !== UserRole.SYSTEM
          ? { id: actor.id }
          : {}),
      },
      include: {
        assets: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { ok: true, data: user };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
