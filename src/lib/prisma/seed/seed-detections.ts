import {
  PrismaClient,
  Asset,
  Broadcaster,
  Detection,
  DetectionStatus,
} from "../generated";
import { seedDetections as seedScript } from "/Volumes/T7/CODESK-T7/aaron/local/seed-detections.ts";

export async function seedDetections(
  prisma: PrismaClient,
  assets: Asset[],
  broadcasters: Broadcaster[],
): Promise<Detection[]> {
  console.log("➡️ Seeding Detections...");

  return seedScript(prisma, assets, broadcasters);
}
