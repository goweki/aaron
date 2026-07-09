import { Asset, PrismaClient } from "../generated";
import crypto from "crypto";

const ALGORITHM = "aaron-watermark";
const VERSION = "1.0";

/**
 * Builds a deterministic watermark payload for an asset.
 */
function buildPayload(asset: Asset): string {
  const hash = crypto
    .createHash("sha256")
    .update(`${asset.id}:${asset.isrc}:${asset.title}`)
    .digest("hex")
    .slice(0, 32);

  return `AARON|${VERSION}|${hash}`;
}

export async function seedWatermarks(
  prisma: PrismaClient,
  assets: Asset[],
): Promise<void> {
  console.log("💧 Seeding watermarks...");

  for (const asset of assets) {
    const payload = buildPayload(asset);

    await prisma.watermark.upsert({
      where: {
        assetId: asset.id,
      },
      update: {
        algorithm: ALGORITHM,
        payload: payload,
      },
      create: {
        assetId: asset.id,
        algorithm: ALGORITHM,
        payload: payload,
      },
    });
  }

  console.log(`✅ ${assets.length} watermarks seeded.`);
}
