import { AssetWithArtist } from ".";
import { PrismaClient } from "../generated";

export async function seedWatermarks(
  prisma: PrismaClient,
  assets: AssetWithArtist[],
): Promise<void> {
  console.log("➡️ Seeding Watermarks...");

  for (const asset of assets) {
    await prisma.watermark.create({
      data: {
        assetId: asset.id,
        algorithm: "spread-spectrum",
        payload: asset.owner.id,
      },
    });
  }
}
