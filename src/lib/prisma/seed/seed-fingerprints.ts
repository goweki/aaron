import { PrismaClient, Asset } from "../generated";

export async function seedFingerprints(
  prisma: PrismaClient,
  assets: Asset[],
): Promise<number> {
  console.log("➡️ Seeding Audio Fingerprints & Hashes...");

  let totalHashesSeeded = 0;

  for (const asset of assets) {
    // 1. Create parent AudioFingerprint metadata
    const audioFingerprint = await prisma.audioFingerprint.create({
      data: {
        assetId: asset.id,
        algorithm: "landmark",
        version: "1.0.4",
      },
    });

    // 2. Generate ~300 mock landmark hashes (hcode/tcode pairs) for the track
    const mockHashes = [];
    const hashBase = Math.floor(Math.random() * 1000000);

    for (
      let offsetMs = 0;
      offsetMs < (asset.duration || 180) * 1000;
      offsetMs += 500
    ) {
      const hcode = hashBase + (offsetMs % 1337);
      mockHashes.push({
        hash: BigInt(hcode),
        offsetMs,
        audioFingerprintId: audioFingerprint.id,
        assetId: asset.id,
      });
    }

    // 3. Bulk insert granular landmark hashes
    await prisma.fingerprintHash.createMany({
      data: mockHashes,
    });

    totalHashesSeeded += mockHashes.length;
  }

  return totalHashesSeeded;
}
