// seed.js
// const { PrismaClient } = require("@prisma/client");
import { PrismaClient } from "@prisma/client";
// const seedData = require("./data/seed.json"); // Import JSON data
import seedData from "./data/seed.json" assert { type: "json" };
// const pLimit = require("p-limit"); // Import p-limit
const pLimit = await import("p-limit").then((module) => module.default);

const prisma = new PrismaClient();
const { users } = seedData;

const limit = pLimit(5); // Limit the number of concurrent asset creation tasks to 5

async function seed() {
  // Seed users
  for (const _user of users) {
    const { email, assets, ...user } = _user;
    // Insert user
    const createdUser = await prisma.user.upsert({
      where: { email },
      update: { ...user },
      create: { email, ...user },
    });
    console.log("User created : ", createdUser.name, " - ", createdUser.email);
    // Insert user assets
    if (assets && assets.length > 0) {
      console.log(" Creating user assets");
      for (const _asset of assets) {
        await limit(async () => {
          const { fingerprint, watermark, ...asset } = _asset;
          // create asset
          const assetCreated = await prisma.asset.create({
            data: {
              ...asset,
              adminId: createdUser.id,
            },
          });
          console.log("  > asset saved : ", assetCreated.title);
          // asset fingerprint
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
            console.log("   >> fingerprint saved  ");
          }
          // asset watermark
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
            console.log("   >> watermark saved  ");
          }
          return assetCreated;
        });
      }
    }
  }

  // Log counts
  const userCount = await prisma.user.count();
  const assetCount = await prisma.asset.count();

  console.log("Users saved : ", userCount);
  console.log("Assets saved : ", assetCount);
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
