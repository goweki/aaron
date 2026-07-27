import { PrismaClient, Broadcaster, Status } from "../generated";

export async function seedBroadcasters(
  prisma: PrismaClient,
): Promise<Broadcaster[]> {
  console.log("➡️ Seeding Broadcasters...");

  const radioStations = [
    {
      name: "Capital FM 98.4",
      description: "Urban Adult Contemporary Radio",
      country: "KE",
      frequency: "98.4 MHz",
      streamUrl: "https://stream.capitalfm.co.ke/live",
      status: Status.ACTIVE,
    },
    {
      name: "BBC Radio 1",
      description: "Top 40 and Electronic Music",
      country: "UK",
      frequency: "97.1 MHz",
      streamUrl: "https://stream.bbc.co.uk/radio1",
      status: Status.ACTIVE,
    },
  ];

  const broadcasters: Broadcaster[] = [];
  for (const station of radioStations) {
    const b = await prisma.broadcaster.create({ data: station });
    broadcasters.push(b);
  }

  return broadcasters;
}
