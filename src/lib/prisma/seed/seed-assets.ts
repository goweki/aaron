import { PrismaClient, User, Asset, AssetType, Status } from "../generated";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { AssetWithArtist } from ".";

interface FmaMetadata {
  custom_track_id: string;
  file: string;
  title: string;
  artist: string;
  album: string;
  description: string;
  custom_artist_name: string;
  custom_artist_id: string;
  type: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function seedAssets(
  prisma: PrismaClient,
  users: User[],
): Promise<AssetWithArtist[]> {
  console.log("➡️ Seeding Assets from JSON dataset...");

  if (users.length === 0) {
    throw new Error("Cannot seed assets without users. Run seedUsers first.");
  }

  // ------------------------------------------------------------------
  // Resolve metadata file
  // ------------------------------------------------------------------

  const localDir = path.join(__dirname, "local");
  const jsonPath = path.join(localDir, "metadata1000.json");

  const audioFilesDir = path.join(localDir, "fma_audio_files");

  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Metadata file not found:\n${jsonPath}`);
  }

  const rawData = fs.readFileSync(jsonPath, "utf8");
  const fmaTracks: FmaMetadata[] = JSON.parse(rawData);

  console.log(`Found ${fmaTracks.length} metadata records.`);

  // ------------------------------------------------------------------
  // Choose owners
  // ------------------------------------------------------------------

  const artists = users.filter((u) => u.role === "USER");
  const assets: AssetWithArtist[] = [];

  // ------------------------------------------------------------------
  // Seed assets
  // ------------------------------------------------------------------

  for (let i = 0; i < fmaTracks.length; i++) {
    const item = fmaTracks[i];

    // Find the user associated with this specific track
    const owner = artists.find((artist) => artist.id === item.custom_artist_id);

    if (!owner) {
      console.warn(`⚠ No user found for track ${item.custom_track_id}`);
      continue;
    }

    // Normalize Windows paths for cross-platform compatibility
    const relativePath = item.file.replace(/\\/g, path.sep);

    // Resolve audio file relative to the audioFilesDir directory.
    const audioPath = path.resolve(audioFilesDir, relativePath);

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
        id: item.custom_track_id,
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
      include: {
        owner: true,
      },
    });

    assets.push(asset);
  }

  console.log(`✅ Successfully seeded ${assets.length} assets.`);

  return assets;
}
