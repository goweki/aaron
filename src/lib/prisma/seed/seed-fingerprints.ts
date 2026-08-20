import fs from "node:fs";
import path from "node:path";

import { PrismaClient, Asset } from "../generated";
import { fileURLToPath } from "node:url";

type FingerprintHashJson = {
  hash: number | string;
  offsetMs: number;
};

type FingerprintJson = {
  custom_track_id?: string;
  custom_artist_id?: string;

  metadata?: {
    title?: string;
    artist?: string;
    album?: string;
    type?: string;
  };

  audio?: {
    duration?: number;
    sampleRate?: number;
    bitRate?: number;
    channels?: number;
  };

  fingerprint?: {
    algorithm?: string;
    version?: string;
    generatedAt?: string;
    hashes?: FingerprintHashJson[];
  };
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function seedFingerprints(
  prisma: PrismaClient,
  assets: Asset[],
): Promise<number> {
  console.log("➡️ Seeding Audio Fingerprints & Hashes...");

  const localDir = path.join(__dirname, "local");
  const fingerprintsDir = path.join(localDir, "fingerprints");

  let totalHashesSeeded = 0;
  let fingerprintsSeeded = 0;
  let filesMissing = 0;

  for (const asset of assets) {
    const fingerprintPath = path.join(fingerprintsDir, `${asset.id}.json`);

    // ---------------------------------------------------------
    // 1. Find fingerprint JSON for this asset
    // ---------------------------------------------------------

    if (!fs.existsSync(fingerprintPath)) {
      console.warn(
        `⚠ No fingerprint file for asset ${asset.id}: ${fingerprintPath}`,
      );

      filesMissing++;
      continue;
    }

    // ---------------------------------------------------------
    // 2. Parse JSON
    // ---------------------------------------------------------

    let fingerprintData: FingerprintJson;

    try {
      const raw = fs.readFileSync(fingerprintPath, "utf8");
      fingerprintData = JSON.parse(raw);
    } catch (error) {
      console.error(
        `❌ Failed to parse fingerprint file for asset ${asset.id}`,
        error,
      );

      continue;
    }

    const fingerprint = fingerprintData.fingerprint;

    if (!fingerprint) {
      console.warn(`⚠ Missing fingerprint object for asset ${asset.id}`);

      continue;
    }

    const hashes = fingerprint.hashes ?? [];

    if (hashes.length === 0) {
      console.warn(`⚠ No hashes found for asset ${asset.id}`);

      continue;
    }

    // ---------------------------------------------------------
    // 3. Validate algorithm/version
    // ---------------------------------------------------------

    const algorithm = fingerprint.algorithm ?? "landmark";
    const version = fingerprint.version ?? "1.0.4";

    console.log(
      `🎵 ${asset.id}: ${hashes.length} hashes (${algorithm} ${version})`,
    );

    // ---------------------------------------------------------
    // 4. Create AudioFingerprint
    // ---------------------------------------------------------

    const audioFingerprint = await prisma.audioFingerprint.create({
      data: {
        assetId: asset.id,
        algorithm,
        version,
      },
    });

    fingerprintsSeeded++;

    // ---------------------------------------------------------
    // 5. Convert JSON hashes to Prisma records
    // ---------------------------------------------------------

    const hashRecords = hashes.map((entry) => {
      if (entry.hash === undefined || entry.hash === null) {
        throw new Error(`Invalid hash for asset ${asset.id}`);
      }

      if (
        entry.offsetMs === undefined ||
        entry.offsetMs === null ||
        !Number.isFinite(entry.offsetMs)
      ) {
        throw new Error(`Invalid offsetMs for asset ${asset.id}`);
      }

      return {
        hash: BigInt(String(entry.hash)),
        offsetMs: Math.trunc(entry.offsetMs),
        audioFingerprintId: audioFingerprint.id,
        assetId: asset.id,
      };
    });

    // ---------------------------------------------------------
    // 6. Bulk insert real fingerprint hashes
    // ---------------------------------------------------------

    await prisma.fingerprintHash.createMany({
      data: hashRecords,
    });

    totalHashesSeeded += hashRecords.length;

    console.log(`   ✓ ${hashRecords.length} hashes inserted`);
  }

  console.log("");
  console.log("✅ Fingerprint seeding complete");
  console.log(`   Fingerprints: ${fingerprintsSeeded}`);
  console.log(`   Hashes:       ${totalHashesSeeded}`);
  console.log(`   Missing:      ${filesMissing}`);

  return totalHashesSeeded;
}
