// // import "server-only";

// import bcrypt from "bcryptjs";
// const saltRounds = Number(process.env.BCRYPT_SALTROUNDS || 9);
// import crypto from "crypto";

// /**
//  * HASHING
//  */

// export async function hash(plaintext: string) {
//   return await bcrypt.hash(plaintext, saltRounds);
// }

// // To compare input&hash
// export async function compareHash(
//   input: string,
//   hash: string,
// ): Promise<boolean> {
//   return await bcrypt.compare(input, hash);
// }

// export async function generateRandom(length: number = 11): Promise<string> {
//   return crypto.randomBytes(length).toString("hex");
// }
