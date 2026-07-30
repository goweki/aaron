import { PrismaClient, User, UserRole, Status } from "../generated";

import { config } from "dotenv";
import bcrypt from "bcryptjs";
config({ path: ".env.local" }); // Explicitly look at .env.local

const SALT_ROUNDS = process.env.BCRYPT_SALTROUNDS;

export async function seedUsers(prisma: PrismaClient): Promise<User[]> {
  if (!SALT_ROUNDS) throw new Error("env variable missing: BCRYPT_SALTROUNDS");

  console.log("➡️ Seeding Users...");

  const usersData = [
    {
      name: "Admin System",
      email: process.env.SYSTEM_EMAIL || "test@goweki.com",
      role: UserRole.ADMINISTRATOR,
      status: Status.ACTIVE,
      password: process.env.SYSTEM_PASSWORD || "pass1234",
      apiKeyHash: "hash_admin_secret_key_123",
    },
    {
      name: "Example User (Artist)",
      email: "example@goweki.com",
      role: UserRole.USER,
      status: Status.ACTIVE,
      password: process.env.SYSTEM_PASSWORD || "pass1234",
      apiKeyHash: "hash_artist_key_456",
    },
  ];

  const users: User[] = [];
  for (const u of usersData) {
    const { password, ...u_ } = u;
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: { ...u_, passwordHash },
    });
    users.push(user);
  }

  return users;
}
