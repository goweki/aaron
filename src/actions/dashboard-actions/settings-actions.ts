"use server";

import { requireUser } from "@/lib/auth/auth-actions";
import prisma from "@/lib/prisma";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import { createApiKey } from "@/lib/auth/token-handlers";
import { UserRole } from "@/lib/prisma/generated";

export async function getUserSettingsAction(): Promise<
  ActionResult<{
    id: string;
    email: string;
    name: string;
    role: UserRole;
    apiKeyHash: string | null;
  }>
> {
  const actor = await requireUser();

  try {
    const user = await prisma.user.findUnique({
      where: { id: actor.id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        apiKeyHash: true,
      },
    });

    if (!user) {
      return { ok: false, error: "User not found." };
    }

    return { ok: true, data: user };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function generateApiKeyAction(): Promise<
  ActionResult<{ apiKey: string }>
> {
  const user = await requireUser();

  try {
    const result = await createApiKey({ userId: user.id });
    return { ok: true, data: { apiKey: result.apiKey } };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

export async function revokeApiKeyAction(): Promise<
  ActionResult<{ revoked: true }>
> {
  const user = await requireUser();

  try {
    await prisma.user.update({
      where: { id: user.id },
      data: { apiKeyHash: null },
    });

    return { ok: true, data: { revoked: true } };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
