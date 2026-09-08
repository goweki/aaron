import { PrismaClient, Broadcaster, Status } from "../generated";
import { seedBroadcasters as seedScript } from "/Volumes/T7/CODESK-T7/aaron/local/seed-broadcasters";

export async function seedBroadcasters(
  prisma: PrismaClient,
): Promise<Broadcaster[]> {
  console.log("➡️ Seeding Broadcasters...");

  return seedScript(prisma);
}
