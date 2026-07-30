"use server";

import prisma from "@/lib/prisma";
import { generateRandom, hash } from "@/lib/utils/password-handlers";
import { getFriendlyErrorMessage } from "@/lib/utils/error-handlers";
import { ActionResult } from "@/types/action";
import sendEmail, { SendEmailProps } from "@/lib/mail";
import { resetPasswordEmail } from "@/components/email/utils";
import { getUserByKey, getUsersAction } from "./dashboard-actions/user-actions";
import { BASE_URL } from "@/lib/utils/get-url";

export async function resetPasswordAction(
  email: string,
): Promise<ActionResult<{ success: boolean }>> {
  try {
    // 1. Fetch User
    const user = await prisma.user.findUnique({
      where: { email: email?.toLowerCase().trim() },
    });

    if (!user) {
      return { ok: true, data: { success: true } };
    }

    // 2. Generate Token & Expiry (1 hour)
    const resetToken = await generateRandom(12);
    const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    });

    // 3. Construct Reset Link
    const resetUrlTail = `${resetToken}?username=${encodeURIComponent(user.email)}`;
    const resetLink = `${BASE_URL}/reset-password/${resetUrlTail}`;

    // 4. Send Email
    console.log(
      `[PASSWORD RESET]: Sending reset password email to [${user.email}]`,
    );
    const emailToSend = await resetPasswordEmail(user.name || "", resetLink);

    if (process.env.NODE_ENV === "development") {
      console.log("📧 Email (DEV MODE)");
      console.log({
        to: user.email,
        subject: "Reset Password: Q-Sync",
        resetLink,
      });
    } else {
      await sendEmail({
        to: user.email,
        subject: "Reset Password: AARON",
        message: {
          react: emailToSend.emailReact,
          text: emailToSend.emailText,
        },
      });
    }

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
  username: string;
  token: string;
  name: string;
  password: string;
}): Promise<ActionResult<{ success: boolean }>> {
  try {
    const { username, token, name, password } = input;

    const user = await prisma.user.findFirst({
      where: {
        email: username.toLowerCase().trim(),
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

    const passwordHash = await hash(password);

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
