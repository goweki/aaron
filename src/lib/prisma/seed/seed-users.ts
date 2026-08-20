import { PrismaClient, User, UserRole, Status } from "../generated";
import "dotenv/config";
import bcrypt from "bcryptjs";
import artistsData from "./local/artists.json";

const SALT_ROUNDS = process.env.BCRYPT_SALTROUNDS;

interface ArtistJSON {
  custom_artist_id: string;
  custom_artist_name: string;
}

export async function seedUsers(prisma: PrismaClient): Promise<User[]> {
  if (!SALT_ROUNDS) throw new Error("env variable missing: BCRYPT_SALTROUNDS");

  console.log("➡️ Seeding Users...");

  const defaultPassword = "pass1234";

  const systemData = {
    id: "system",
    name: "System",
    email: "system@goweki.com",
    role: UserRole.SYSTEM,
    status: Status.ACTIVE,
    password: process.env.ADMIN_PASSWORD || defaultPassword,
  };

  const adminData = {
    id: "admin",
    name: "Admin",
    email: process.env.ADMIN_EMAIL || "admin@goweki.com",
    role: UserRole.ADMINISTRATOR,
    status: Status.ACTIVE,
    password: process.env.ADMIN_PASSWORD || defaultPassword,
  };

  // 2. Map JSON data into your user schema structure
  const artistUsersData = (artistsData as ArtistJSON[]).map((artist) => {
    // Sanitize name to generate clean email addresses (e.g. "Sean Paul" -> "seanpaul")
    const cleanName = artist.custom_artist_name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    return {
      id: artist.custom_artist_id,
      name: artist.custom_artist_name,
      email: `${cleanName}@goweki.com`,
      role: UserRole.USER,
      status: Status.ACTIVE,
      password: defaultPassword,
    };
  });

  const allUsersData = [systemData, adminData, ...artistUsersData];
  const users: User[] = [];

  // 3. Hash passwords and write to database
  for (const u of allUsersData) {
    const { password, ...u_ } = u;
    const passwordHash = await bcrypt.hash(password, parseInt(SALT_ROUNDS));

    const user = await prisma.user.create({
      data: { ...u_, passwordHash },
    });
    users.push(user);
  }

  return users;
}
