import { PrismaClient, User, UserRole, Status } from "../generated";

export async function seedUsers(prisma: PrismaClient): Promise<User[]> {
  console.log("➡️ Seeding Users...");

  const usersData = [
    {
      name: "Admin System",
      email: "admin@system.com",
      role: UserRole.ADMINISTRATOR,
      status: Status.ACTIVE,
      apiKeyHash: "hash_admin_secret_key_123",
    },
    {
      name: "John Doe (Artist)",
      email: "john@musiclabel.com",
      role: UserRole.USER,
      status: Status.ACTIVE,
      apiKeyHash: "hash_artist_key_456",
    },
  ];

  const users: User[] = [];
  for (const u of usersData) {
    const user = await prisma.user.create({ data: u });
    users.push(user);
  }

  return users;
}
