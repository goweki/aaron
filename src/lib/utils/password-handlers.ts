import "server-only";

import bcrypt from "bcryptjs";
const SALT_ROUNDS = process.env.BCRYPT_SALTROUNDS || 9;
import crypto from "crypto";

/**
 * HASHING
 */

export async function hash(plaintext: string) {
  if (!SALT_ROUNDS) throw new Error("env variable missing: BCRYPT_SALTROUNDS");

  return await bcrypt.hash(plaintext, SALT_ROUNDS);
}

// To compare input&hash
export async function compareHash(
  input: string,
  hash: string,
): Promise<boolean> {
  return await bcrypt.compare(input, hash);
}

export async function generateRandom(length: number = 11): Promise<string> {
  return crypto.randomBytes(length).toString("hex");
}
