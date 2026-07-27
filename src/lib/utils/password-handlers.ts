import bcrypt from "bcryptjs";

/* Hashes a string.
 * @param plaintext - String to be hashed.
 * @returns corresponding hash value.
 */
export async function hash(plaintext: string): Promise<string> {
  const saltRounds = Number(process.env.BCRYPT_SALTROUNDS ?? "9");
  if (!saltRounds) throw new Error("env variable missing: BCRYPT_SALTROUNDS");
  const hash = await bcrypt.hash(plaintext, saltRounds);
  return hash;
}

/* Compares plaintext to hash.
 * @param input - plaintext.
 * @param hash - hash value to be compared against.
 * @returns `true` if hash is hashed input, otherwise `false`.
 */
export async function compareHash(
  input: string,
  hash: string,
): Promise<boolean> {
  const isValid = await bcrypt.compare(input, hash);
  return isValid;
}
