// seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seedData = require("./data/seed.json"); // Import JSON data
const { users, assets } = seedData;

async function seed() {
  // Clear existing data
  await prisma.$transaction([
    prisma.asset.deleteMany({}),
    prisma.user.deleteMany({}),
  ]);

  // Insert users
  const userPromises = users.map(async (_user) => {
    const { assets, ...user } = _user;
    const createdUser = await prisma.user.create({
      data: {
        email: user.email || "",
        name: user.name || "",
        role: user.role || "USER", // Default to 'USER'
        tel: user.tel || "",
        email: user.email || "",
        avatar: user.avatar || "",
        status: user.status || "DOMANT", // Default to 'USER'
      },
    });

    // Insert related fingerprints
    if (assets && assets.length > 0) {
      const assetPromises = assets.map(async (_asset) => {
        const { fingerprint, watermark, ...asset } = _asset;
        const assetCreated = await prisma.asset.create({
          data: {
            ...asset,
            adminId: createdUser.id,
          },
        });
        if (fingerprint) {
          await prisma.audioFingerprint.upsert({
            where: { assetId: assetCreated.id },
            update: {
              fingerprint,
            },
            create: {
              assetId: assetCreated.id,
              fingerprint,
            },
          });
        }
        if (watermark) {
          await prisma.watermark.upsert({
            where: { assetId: assetCreated.id },
            update: {
              watermark,
            },
            create: {
              assetId: assetCreated.id,
              watermark,
            },
          });
        }
        return assetCreated;
      });
      await Promise.all(assetPromises);
    }
  });

  await Promise.all(userPromises);

  // Log counts
  const assetCount = await prisma.asset.count();
  const userCount = await prisma.user.count();

  console.log("assets: ", assetCount);
  console.log("users: ", userCount);
  console.log("SEED COMPLETE");
}

// Run the seed function
seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
