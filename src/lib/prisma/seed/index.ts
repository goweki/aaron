import prisma from "..";

import {
  User,
  Asset,
  Broadcaster,
  MonitoringSession,
  Detection,
} from "../generated";

import { seedUsers } from "./seed-users";
import { seedAssets } from "./seed-assets";
import { seedFingerprints } from "./seed-fingerprints";
import { seedWatermarks } from "./seed-watermarks";
import { seedBroadcasters } from "./seed-broadcasters";
import { seedMonitoringSessions } from "./seed-monitoring-sessions";
import { seedDetections } from "./seed-detections";

// import { clearData } from "./clear-data";

async function main() {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🌱 Starting database seeding...");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  try {
    // ----------------------------------------
    // OPTIONAL: Clear existing data
    // ----------------------------------------
    // await clearData(prisma);

    // ----------------------------------------
    // 1️⃣ Users
    // ----------------------------------------
    const users: User[] = await seedUsers(prisma);

    // ----------------------------------------
    // 2️⃣ Assets
    // ----------------------------------------
    const assets: Asset[] = await seedAssets(prisma, users);

    // ----------------------------------------
    // 3️⃣ Audio Fingerprints
    // ----------------------------------------
    await seedFingerprints(prisma, assets);

    // ----------------------------------------
    // 4️⃣ Watermarks
    // ----------------------------------------
    await seedWatermarks(prisma, assets);

    // ----------------------------------------
    // 5️⃣ Broadcasters
    // ----------------------------------------
    const broadcasters: Broadcaster[] = await seedBroadcasters(prisma);

    // ----------------------------------------
    // 6️⃣ Monitoring Sessions
    // ----------------------------------------
    const sessions: MonitoringSession[] = await seedMonitoringSessions(
      prisma,
      broadcasters,
    );

    // ----------------------------------------
    // 7️⃣ Detections
    // ----------------------------------------
    const detections: Detection[] = await seedDetections(
      prisma,
      assets,
      broadcasters,
      sessions,
    );

    console.log("");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📊 Seed Summary");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`👤 Users: ${users.length}`);
    console.log(`🎵 Assets: ${assets.length}`);
    console.log(`📡 Broadcasters: ${broadcasters.length}`);
    console.log(`📺 Monitoring Sessions: ${sessions.length}`);
    console.log(`🎯 Detections: ${detections.length}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🎉 Database seeding complete!");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  } catch (error) {
    console.error("");
    console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.error("❌ Seeding failed");
    console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.error(error);
    throw error;
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
