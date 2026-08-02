import { PrismaClient, User, Asset, AssetType, Status } from "../generated";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";

interface FmaMetadata {
  file: string;
  title: string;
  artist?: string;
  album?: string;
  description?: string;
  type?: string;
}

export async function seedAssets(
  prisma: PrismaClient,
  users: User[],
): Promise<Asset[]> {
  console.log("➡️ Seeding Assets from JSON dataset...");

  if (!users || users.length === 0) {
    throw new Error("Cannot seed assets without users. Run seedUsers first.");
  }

  // 1. Resolve path to JSON file
  const jsonPath = path.join(__dirname, "local", "metadata1000.json");

  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Metadata file not found at: ${jsonPath}`);
  }

  // 2. Load and parse the JSON file
  const rawData = fs.readFileSync(jsonPath, "utf-8");
  const fmaTracks: FmaMetadata[] = JSON.parse(rawData);

  // Filter regular users or default to all available seed users
  const regularUsers = users.filter((u) => u.role === "USER");
  const ownerPool = regularUsers.length > 0 ? regularUsers : users;

  const assets: Asset[] = [];

  for (let i = 0; i < fmaTracks.length; i++) {
    const item = fmaTracks[i];

    // Assign owners in a round-robin loop across seed users
    const owner = ownerPool[i % ownerPool.length];

    // Extract filename from file path
    const filename = path.basename(item.file);

    // Compute checksum & file size if the file exists locally
    let fileSize: number | undefined;
    let checksum: string | undefined;

    if (fs.existsSync(item.file)) {
      const buffer = fs.readFileSync(item.file);
      fileSize = buffer.length;
      checksum = crypto.createHash("sha256").update(buffer).digest("hex");
    }

    const asset = await prisma.asset.create({
      data: {
        title: item.title,
        artist: item.artist ?? null,
        album: item.album ?? null,
        description: item.description ?? null,
        file: item.file,
        filename: filename,
        fileSize: fileSize ?? null,
        checksum: checksum ?? null,
        type: item.type === "VIDEO" ? AssetType.VIDEO : AssetType.MUSIC,
        status: Status.ACTIVE,
        ownerId: owner.id, // Assigned seed user ID
      },
    });

    assets.push(asset);
  }

  console.log(`✅ Successfully seeded ${assets.length} assets from JSON.`);
  return assets;
}
