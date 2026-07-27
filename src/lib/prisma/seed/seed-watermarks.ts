import { PrismaClient, Asset } from "../generated";

export async function seedWatermarks(
  prisma: PrismaClient,
  assets: Asset[],
): Promise<void> {
  console.log("➡️ Seeding Watermarks...");

  for (const asset of assets) {
    await prisma.watermark.create({
      data: {
        assetId: asset.id,
        algorithm: "spread-spectrum",
        payload: `WM_OWNER_${asset.ownerId}_ISRC_${asset.isrc || "UNKNOWN"}`,
      },
    });
  }
}
