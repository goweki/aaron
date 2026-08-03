import { PrismaClient, User, Asset, AssetType, Status } from "../generated";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

interface FmaMetadata {
  file: string;
  title: string;
  artist?: string;
  album?: string;
  description?: string;
  type?: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function seedAssets(
  prisma: PrismaClient,
  users: User[],
): Promise<Asset[]> {
  console.log("➡️ Seeding Assets from JSON dataset...");

  if (users.length === 0) {
    throw new Error("Cannot seed assets without users. Run seedUsers first.");
  }

  // ------------------------------------------------------------------
  // Resolve metadata file
  // ------------------------------------------------------------------

  const datasetDir = path.join(__dirname, "local");
  const jsonPath = path.join(datasetDir, "metadata1000.json");

  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Metadata file not found:\n${jsonPath}`);
  }

  const rawData = fs.readFileSync(jsonPath, "utf8");
  const fmaTracks: FmaMetadata[] = JSON.parse(rawData);

  console.log(`Found ${fmaTracks.length} metadata records.`);

  // ------------------------------------------------------------------
  // Choose owners
  // ------------------------------------------------------------------

  const regularUsers = users.filter((u) => u.role === "USER");

  const ownerPool = regularUsers.length > 0 ? regularUsers : users;

  const assets: Asset[] = [];

  // ------------------------------------------------------------------
  // Seed assets
  // ------------------------------------------------------------------

  for (let i = 0; i < fmaTracks.length; i++) {
    const item = fmaTracks[i];
    const owner = ownerPool[i % ownerPool.length];

    // Normalize Windows paths for cross-platform compatibility
    const relativePath = item.file.replace(/\\/g, path.sep);

    // Resolve audio file relative to the metadata directory.
    // If the JSON already contains an absolute path, keep it.
    const audioPath = path.isAbsolute(relativePath)
      ? relativePath
      : path.resolve(datasetDir, relativePath);

    const filename = path.basename(audioPath);

    let fileSize: number | null = null;
    let checksum: string | null = null;

    if (fs.existsSync(audioPath)) {
      const buffer = fs.readFileSync(audioPath);

      fileSize = buffer.length;

      checksum = crypto.createHash("sha256").update(buffer).digest("hex");
    } else {
      console.warn(`⚠ Missing audio file: ${audioPath}`);
    }

    const asset = await prisma.asset.create({
      data: {
        title: item.title,
        artist: item.artist ?? null,
        album: item.album ?? null,
        description: item.description ?? null,

        file: audioPath,
        filename,

        fileSize,
        checksum,

        type:
          item.type?.toUpperCase() === "VIDEO"
            ? AssetType.VIDEO
            : AssetType.MUSIC,

        status: Status.ACTIVE,

        ownerId: owner.id,
      },
    });

    assets.push(asset);
  }

  console.log(`✅ Successfully seeded ${assets.length} assets.`);

  return assets;
}
