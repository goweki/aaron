import { PrismaClient, Status, User, UserRole } from "../generated";
import bcrypt from "bcryptjs";

type SeedUser = {
  name: string;
  email: string;
  phone: string;
  role: UserRole;
};

const USERS: SeedUser[] = [
  {
    name: "System Administrator",
    email: "system@aaron.local",
    phone: "+254700000001",
    role: UserRole.SYSTEM,
  },
  {
    name: "Content Administrator",
    email: "admin@aaron.local",
    phone: "+254700000002",
    role: UserRole.ADMINISTRATOR,
  },
  {
    name: "Sauti Sol",
    email: "sautisol@example.com",
    phone: "+254700000003",
    role: UserRole.USER,
  },
  {
    name: "Nyashinski",
    email: "nyashinski@example.com",
    phone: "+254700000004",
    role: UserRole.USER,
  },
];

export async function seedUsers(prisma: PrismaClient): Promise<User[]> {
  console.log("👤 Seeding users...");

  const encRounds = process.env.BCRYPT_SALTROUNDS;

  if (!encRounds) {
    throw new Error("Missing env BCRYPT_SALTROUNDS");
  }

  const passwordHash = await bcrypt.hash("Password123!", encRounds);

  const users: User[] = [];

  for (const user of USERS) {
    const created = await prisma.user.upsert({
      where: {
        email: user.email,
      },
      update: {
        name: user.name,
        phone: user.phone,
        role: user.role,
        status: Status.ACTIVE,
      },
      create: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        passwordHash,
        role: user.role,
        status: Status.ACTIVE,
      },
    });

    users.push(created);
  }

  console.log(`✅ ${users.length} users seeded.`);

  return users;
}
