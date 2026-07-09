import "server-only";

import crypto from "crypto";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Status, User } from "../prisma/generated";

export type ApiKeyAuth = {
  user: Omit<User, "passwordHash" | "resetToken" | "resetTokenExpiry">;
};

export type ApiKeyValidationResult = ApiKeyAuth | NextResponse;

/**
 * Generate secure API key string
 */
function generateApiKeyString() {
  return "aaronKey_" + crypto.randomBytes(32).toString("hex");
}

/**
 * Hash API key before storage
 */
export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

/**
 * Create API key
 * Returns raw key ONLY ONCE
 */
export async function createApiKey(options: {
  userId: string;
}): Promise<{ userId: string; apiKey: string }> {
  const user = await prisma.user.findFirst({ where: { id: options.userId } });

  if (!user) {
    throw new Error("User not found");
  }

  const rawKey = generateApiKeyString();
  const keyHash = hashToken(rawKey);

  await prisma.user.update({
    where: { id: options.userId },
    data: { apiKeyHash: keyHash },
  });

  return {
    userId: user.id,
    apiKey: rawKey,
  };
}

/**
 * Validate Token
 */
export async function validateToken(
  token?: string | null,
): Promise<ApiKeyValidationResult> {
  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 401 });
  }

  const hashedToken = hashToken(token);

  const user_withKey = await prisma.user.findFirst({
    where: { apiKeyHash: hashedToken, status: { not: Status.DELETED } },
  });

  if (!user_withKey) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  return {
    user: user_withKey,
  };
}

/**
 * Extract API key from request
 */
export function extractApiKey(req: Request): string {
  const headerKey = req.headers.get("api-key") || req.headers.get("x-api-key");
  if (headerKey) return headerKey;

  const auth = req.headers.get("Authorization");
  if (!auth) {
    console.error("Authorization failed");
    return "";
  }
  return auth.replace(/^Bearer\s+/i, "");
}

export type AuthenticatedHandler = (
  request: NextRequest,
  auth: ApiKeyAuth,
) => Promise<Response | NextResponse> | Response | NextResponse;

export function apiKeyMiddleware(handler: AuthenticatedHandler) {
  return async (request: NextRequest) => {
    const apiKey =
      request.headers.get("api-key") ||
      request.headers.get("authorization")?.replace("Bearer ", "");

    const auth = await validateToken(apiKey);

    if (auth instanceof NextResponse) {
      return auth;
    }

    return handler(request, auth);
  };
}
