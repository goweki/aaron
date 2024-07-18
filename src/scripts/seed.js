// import prisma from "@/lib/prisma/prisma";
// import mps from "@/data/mps.json";
// import counties from "@/data/counties.json";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const mps = require("../data/mps.json");
const counties = require("../data/counties.json");
const legislations = require("../data/legislations.json");

// funtion definition
async function seed() {
  console.log("SEEDING Constituencies & MPs....");

  for (const mp of mps) {
    const { constituency, county, ...mp_ } = mp;
    const refCounty = counties.find(({ name }) => name === county);
    if (!county) {
      if (mp_.appointment === "nominated") {
        await prisma.mp.upsert({
          where: {
            firstName_lastName_party: {
              firstName: mp_.firstName || "",
              lastName: mp_.lastName,
              party: mp_.party || "",
            },
          },
          update: { ...mp_ },
          create: { ...mp_ },
        });
      } else {
        console.error("DATA ERROR: !county && !'nominated': ", mp_);
        // return;
      }
    } else if (county && !refCounty) {
      console.error(
        "NO REF COUNTY FOUND: \n > county: ",
        county,
        " for MP: ",
        mp_
      );
    } else {
      const resConstituency = await prisma.constituency.upsert({
        where: { name: constituency },
        update: { county },
        create: { name: constituency, county },
      });
      await prisma.mp.upsert({
        where: { constituencyId: resConstituency.id },
        update: { ...mp_ },
        create: { constituencyId: resConstituency.id, ...mp_ },
      });
    }
  }

  console.log("SEEDING legislations....");

  for (const legislation of legislations) {
    const { title, ...legislation_ } = legislation;

    await prisma.legislation.upsert({
      where: { title },
      update: { ...legislation_ },
      create: { title, ...legislation_ },
    });
  }

  console.log(
    "CONSTITUENCIES initialized: ",
    await prisma.constituency.count()
  );
  console.log("MPS initialized: ", await prisma.mp.count());
  console.log("LEGISLATIONS initialized: ", await prisma.legislation.count());
}

//function call
seed()
  .then(async () => {
    console.log("SEEDING COMPLETE");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
