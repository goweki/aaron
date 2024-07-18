// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// view seeded
async function retrieveDBdata() {
  // Queries
  const mps = await prisma.mp.findMany();
  const legislations = await prisma.legislation.findMany();
  // MPs
  console.log(`Total MPs: ${mps.length}`);
  for (const mp of mps) {
    console.log(`Mp: ${mp.lastName}`);
  }
  console.log(`....................`);
  // Legislations
  console.log(`Total legislations: ${legislations.length}`);
  for (const legislation of legislations) {
    console.log(`Legislation: ${legislation.title}`);
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
