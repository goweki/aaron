import { Asset, AssetType, PrismaClient, Status, User } from "../generated";

type SeedAsset = {
  title: string;
  description: string;
  artist: string;
  album: string;
  isrc: string;
  filename: string;
  file: string;
  image: string;
  type: AssetType;
  duration: number;
  sampleRate: number;
  bitRate: number;
  channels: number;
  fileSize: number;
  checksum: string;
  ownerEmail: string;
};

const ASSETS: SeedAsset[] = [
  {
    title: "Kuliko Jana",
    description: "Studio recording",
    artist: "Sauti Sol",
    album: "Midnight Train",
    isrc: "KESA00100001",
    filename: "kuliko-jana.mp3",
    file: "/uploads/audio/kuliko-jana.mp3",
    image: "/uploads/images/kuliko-jana.jpg",
    type: AssetType.MUSIC,
    duration: 248,
    sampleRate: 44100,
    bitRate: 320,
    channels: 2,
    fileSize: 9854123,
    checksum: "checksum-kuliko-jana",
    ownerEmail: "sautisol@example.com",
  },
  {
    title: "Suzanna",
    description: "Studio recording",
    artist: "Sauti Sol",
    album: "Midnight Train",
    isrc: "KESA00100002",
    filename: "suzanna.mp3",
    file: "/uploads/audio/suzanna.mp3",
    image: "/uploads/images/suzanna.jpg",
    type: AssetType.MUSIC,
    duration: 231,
    sampleRate: 44100,
    bitRate: 320,
    channels: 2,
    fileSize: 9321432,
    checksum: "checksum-suzanna",
    ownerEmail: "sautisol@example.com",
  },
  {
    title: "Malaika",
    description: "Studio recording",
    artist: "Nyashinski",
    album: "Lucky You",
    isrc: "KENY00100003",
    filename: "malaika.mp3",
    file: "/uploads/audio/malaika.mp3",
    image: "/uploads/images/malaika.jpg",
    type: AssetType.MUSIC,
    duration: 276,
    sampleRate: 44100,
    bitRate: 320,
    channels: 2,
    fileSize: 10321456,
    checksum: "checksum-malaika",
    ownerEmail: "nyashinski@example.com",
  },
  {
    title: "Aminia",
    description: "Studio recording",
    artist: "Nyashinski",
    album: "Lucky You",
    isrc: "KENY00100004",
    filename: "aminia.mp3",
    file: "/uploads/audio/aminia.mp3",
    image: "/uploads/images/aminia.jpg",
    type: AssetType.MUSIC,
    duration: 262,
    sampleRate: 44100,
    bitRate: 320,
    channels: 2,
    fileSize: 10122345,
    checksum: "checksum-aminia",
    ownerEmail: "nyashinski@example.com",
  },
  {
    title: "Live Performance",
    description: "Concert video",
    artist: "Sauti Sol",
    album: "Live",
    isrc: "KESA00100005",
    filename: "live-performance.mp4",
    file: "/uploads/video/live-performance.mp4",
    image: "/uploads/images/live-performance.jpg",
    type: AssetType.VIDEO,
    duration: 1240,
    sampleRate: 48000,
    bitRate: 2048,
    channels: 2,
    fileSize: 187654321,
    checksum: "checksum-live-performance",
    ownerEmail: "sautisol@example.com",
  },
];

export async function seedAssets(
  prisma: PrismaClient,
  users: User[],
): Promise<Asset[]> {
  console.log("🎵 Seeding assets...");

  const userMap = new Map(
    users.filter((u) => u.email).map((u) => [u.email!, u]),
  );

  const assets: Asset[] = [];

  for (const asset of ASSETS) {
    const owner = userMap.get(asset.ownerEmail);

    if (!owner) {
      throw new Error(
        `Owner '${asset.ownerEmail}' was not found while seeding assets.`,
      );
    }

    const created = await prisma.asset.upsert({
      where: {
        isrc: asset.isrc,
      },
      update: {
        title: asset.title,
        description: asset.description,
        artist: asset.artist,
        album: asset.album,
        filename: asset.filename,
        file: asset.file,
        image: asset.image,
        type: asset.type,
        status: Status.ACTIVE,
        duration: asset.duration,
        sampleRate: asset.sampleRate,
        bitRate: asset.bitRate,
        channels: asset.channels,
        fileSize: asset.fileSize,
        checksum: asset.checksum,
        ownerId: owner.id,
      },
      create: {
        title: asset.title,
        description: asset.description,
        artist: asset.artist,
        album: asset.album,
        isrc: asset.isrc,
        filename: asset.filename,
        file: asset.file,
        image: asset.image,
        type: asset.type,
        status: Status.ACTIVE,
        duration: asset.duration,
        sampleRate: asset.sampleRate,
        bitRate: asset.bitRate,
        channels: asset.channels,
        fileSize: asset.fileSize,
        checksum: asset.checksum,
        ownerId: owner.id,
      },
    });

    assets.push(created);
  }

  console.log(`✅ ${assets.length} assets seeded.`);

  return assets;
}
