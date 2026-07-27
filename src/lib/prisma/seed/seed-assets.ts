import { PrismaClient, User, Asset, AssetType, Status } from "../generated";

export async function seedAssets(
  prisma: PrismaClient,
  users: User[],
): Promise<Asset[]> {
  console.log("➡️ Seeding Assets...");

  const owner = users.find((u) => u.role === "USER") || users[0];

  const tracks = [
    {
      title: "Midnight Echoes",
      artist: "Synthwave Collective",
      album: "Neon Dreams",
      isrc: "US-S1Z-26-00001",
      duration: 210.5,
      type: AssetType.MUSIC,
      status: Status.ACTIVE,
      ownerId: owner.id,
    },
    {
      title: "Acoustic Sunrise",
      artist: "Claire Bennett",
      album: "Morning Coffee",
      isrc: "US-S1Z-26-00002",
      duration: 184.2,
      type: AssetType.MUSIC,
      status: Status.ACTIVE,
      ownerId: owner.id,
    },
  ];

  const assets: Asset[] = [];
  for (const track of tracks) {
    const asset = await prisma.asset.create({ data: track });
    assets.push(asset);
  }

  return assets;
}
