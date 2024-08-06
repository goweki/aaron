// seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seedData = require("../data/seed.json"); // Import JSON data
const { users, assets, fingerprints } = seedData;

async function seed() {
  // Clear existing data
  await prisma.audioFingerprint.deleteMany();
  await prisma.asset.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  await prisma.user.createMany({
    data: users,
  });

  // Fetch users to get their IDs
  const _users = await prisma.user.findMany();
  // console.log("users in db: ", _users);

  // Store assets,embedding adminId in each asset doc
  for (const asset of assets) {
    // console.log("saving asset: ", asset.title);
    const { adminContact, fingerprint, ...asset_ } = asset;

    const _admin = users.find(({ email }) => email === adminContact);
    // console.log("ADMIN1: ", _admin);
    const admin = _users.find(({ email }) => email === _admin.email);
    // console.log("ADMIN2: ", admin);

    console.log("saving asset: ", asset_);

    const savedAsset = await prisma.asset.create({
      data: {
        ...asset_,
        adminId: admin.id,
      },
    });

    // save fingerprint
    await prisma.audioFingerprint.create({
      data: {
        fingerprint,
        assetId: savedAsset.id,
      },
    });
  }

  console.log("assets: ", await prisma.asset.count());
  console.log("fingerprints: ", await prisma.audioFingerprint.count());
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
