import prisma from "..";

export async function clearData() {
  console.log("🧹 Clearing old database data...");
  await prisma.detection.deleteMany();
  await prisma.monitoringSession.deleteMany();
  await prisma.broadcaster.deleteMany();
  await prisma.watermark.deleteMany();
  await prisma.fingerprintHash.deleteMany();
  await prisma.audioFingerprint.deleteMany();
  await prisma.asset.deleteMany();
  await prisma.user.deleteMany();
}
