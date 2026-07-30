"use server";

import prisma from "@/lib/prisma";
import { emailValidator } from "@/lib/utils";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";

export async function resetPasswordAction(
  email: string,
): Promise<ActionResult<{ success: boolean }>> {
  const emailError = emailValidator(email);
  if (emailError) {
    return { ok: false, error: emailError };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    // Security best practice: Avoid revealing whether a user exists
    if (!user) {
      return {
        ok: true,
        data: { success: true },
      };
    }

    // TODO: Trigger password reset token generation & send email here

    return { ok: true, data: { success: true } };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

/**
 * Validates the password reset token against user record and expiry.
 */
export async function verifyResetTokenAction(
  email: string,
  token: string,
): Promise<ActionResult<{ name: string }>> {
  try {
    if (!email || !token) {
      return { ok: false, error: "Invalid or missing token parameters." };
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email.toLowerCase().trim(),
        resetToken: token,
      },
    });

    if (!user) {
      return { ok: false, error: "Invalid password reset link or token." };
    }

    if (user.resetTokenExpiry && user.resetTokenExpiry < new Date()) {
      return {
        ok: false,
        error: "Reset link has expired. Please request a new one.",
      };
    }

    return { ok: true, data: { name: user.name } };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}

/**
 * Updates user password and name using the validated reset token.
 */
export async function updatePasswordWithTokenAction(input: {
  email: string;
  token: string;
  name: string;
  password: string;
}): Promise<ActionResult<{ success: boolean }>> {
  try {
    const { email, token, name, password } = input;

    const emailError = emailValidator(email);
    if (emailError) return { ok: false, error: emailError };

    const user = await prisma.user.findFirst({
      where: {
        email: email.toLowerCase().trim(),
        resetToken: token,
      },
    });

    if (!user) {
      return { ok: false, error: "Invalid password reset token." };
    }

    if (user.resetTokenExpiry && user.resetTokenExpiry < new Date()) {
      return {
        ok: false,
        error: "Reset link has expired. Please request a new one.",
      };
    }

    // TODO: Hash password using bcrypt or argon2 before saving (e.g. await hashPassword(password))
    const passwordHash = password;

    await prisma.user.update({
      where: { id: user.id },
      data: {
        name,
        passwordHash,
        resetToken: null,
        resetTokenExpiry: null,
        status: user.status === "PENDING" ? "ACTIVE" : user.status,
      },
    });

    return { ok: true, data: { success: true } };
  } catch (error) {
    return { ok: false, error: getFriendlyErrorMessage(error) };
  }
}
