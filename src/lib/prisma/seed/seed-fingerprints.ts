import { Asset, PrismaClient } from "../generated";

type FingerprintPoint = {
  time: number;
  fingerprint: number;
};

/**
 * Generates deterministic pseudo fingerprint data.
 *
 * The values are intentionally deterministic so that every
 * database seed produces identical fingerprints.
 */
function buildFingerprint(assetId: string, points = 120): FingerprintPoint[] {
  // create a deterministic integer from the UUID
  const seed = assetId
    .replace(/-/g, "")
    .split("")
    .reduce((sum, c) => sum + c.charCodeAt(0), 0);

  return Array.from({ length: points }, (_, i) => ({
    time: i * 3,
    fingerprint: ((seed * 2654435761 + i * 7919) >>> 0) % 100000000,
  }));
}

export async function seedFingerprints(
  prisma: PrismaClient,
  assets: Asset[],
): Promise<void> {
  console.log("🎼 Seeding audio fingerprints...");

  for (const asset of assets) {
    const fingerprint = buildFingerprint(asset.id);

    await prisma.audioFingerprint.upsert({
      where: {
        assetId: asset.id,
      },
      update: {
        algorithm: "stream-audio-fingerprint",
        version: "1.0-22050hz",
        fingerprint,
      },
      create: {
        assetId: asset.id,
        algorithm: "stream-audio-fingerprint",
        version: "1.0-22050hz",
        fingerprint,
      },
    });
  }

  console.log(`✅ ${assets.length} fingerprints seeded.`);
}
