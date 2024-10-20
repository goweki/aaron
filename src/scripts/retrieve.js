// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// view seeded
async function retrieveDBdata() {
  // Queries
  const users = await prisma.user.findMany({
    include: {
      assets: true,
    },
  });
  console.log("Users: ", users);
  const assets = await prisma.asset.findMany();
  // Users
  console.log(`Users: ${users.length}`);
  for (const user of users) {
    console.log(`  > ${user.name}`);
  }
  // Assets
  console.log(`Assets: ${assets.length}`);
  for (const asset of assets) {
    console.log(`  > ${asset.title}`);
  }
}

retrieveDBdata()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
