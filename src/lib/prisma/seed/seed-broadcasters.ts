import { Broadcaster, PrismaClient, Status } from "../generated";

type SeedBroadcaster = {
  name: string;
  description: string;
  website: string;
  streamUrl: string;
  country: string;
  frequency: string;
};

const BROADCASTERS: SeedBroadcaster[] = [
  {
    name: "Citizen TV",
    description: "Kenyan free-to-air television broadcaster.",
    website: "https://citizen.digital",
    streamUrl: "https://live.citizen.digital",
    country: "Kenya",
    frequency: "UHF",
  },
  {
    name: "NTV Kenya",
    description: "National television broadcaster.",
    website: "https://ntvkenya.co.ke",
    streamUrl: "https://www.ntvkenya.co.ke/live",
    country: "Kenya",
    frequency: "UHF",
  },
  {
    name: "Kiss FM",
    description: "Contemporary music radio station.",
    website: "https://kiss100.co.ke",
    streamUrl: "https://stream.kiss100.co.ke/live",
    country: "Kenya",
    frequency: "100.3 FM",
  },
  {
    name: "Classic 105",
    description: "Adult contemporary radio station.",
    website: "https://classic105.com",
    streamUrl: "https://stream.classic105.com/live",
    country: "Kenya",
    frequency: "105.2 FM",
  },
  {
    name: "Radio Citizen",
    description: "National Swahili radio broadcaster.",
    website: "https://radiocitizen.co.ke",
    streamUrl: "https://stream.radiocitizen.co.ke/live",
    country: "Kenya",
    frequency: "106.7 FM",
  },
];

export async function seedBroadcasters(
  prisma: PrismaClient,
): Promise<Broadcaster[]> {
  console.log("📡 Seeding broadcasters...");

  const broadcasters: Broadcaster[] = [];

  for (const broadcaster of BROADCASTERS) {
    const record = await prisma.broadcaster.upsert({
      where: {
        name: broadcaster.name,
      },
      update: {
        description: broadcaster.description,
        website: broadcaster.website,
        streamUrl: broadcaster.streamUrl,
        country: broadcaster.country,
        frequency: broadcaster.frequency,
        status: Status.ACTIVE,
      },
      create: {
        ...broadcaster,
        status: Status.ACTIVE,
      },
    });

    broadcasters.push(record);
  }

  console.log(`✅ ${broadcasters.length} broadcasters seeded.`);

  return broadcasters;
}
