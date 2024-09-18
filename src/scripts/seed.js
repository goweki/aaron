// seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seedData = require("./data/seed.json"); // Import JSON data
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
  console.log("users in db: ", _users);

  // Store assets,embedding adminId in each asset doc
  for (const asset of assets) {
    console.log("saving asset: ", asset);
    const { adminContact, fingerprint, ...asset_ } = asset;
    console.log("ADMIN_CONTACT: ", adminContact);

    // Find the admin user by email
    const admin = _users.find(({ email }) => email === adminContact);

    // Log the admin information
    if (admin) {
      console.log("ADMIN: ", admin);

      // Here you can use the `admin` object to embed `adminId` in `asset_`
      // For example:
      // await prisma.asset.update({
      //   where: { id: asset_.id },
      //   data: { adminId: admin.id, ...asset_ },
      // });
    } else {
      console.error(`Admin with contact ${adminContact} not found.`);
    }

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
