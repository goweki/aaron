import {
  PrismaClient,
  Asset,
  Broadcaster,
  MonitoringSession,
  Detection,
  DetectionStatus,
} from "../generated";

export async function seedDetections(
  prisma: PrismaClient,
  assets: Asset[],
  broadcasters: Broadcaster[],
  sessions: MonitoringSession[],
): Promise<Detection[]> {
  console.log("➡️ Seeding Detections...");

  const detections: Detection[] = [];

  if (assets.length > 0 && broadcasters.length > 0) {
    const detection = await prisma.detection.create({
      data: {
        assetId: assets[0].id,
        broadcasterId: broadcasters[0].id,
        sessionId: sessions[0]?.id || null,
        broadcastAt: new Date(Date.now() - 3600 * 2 * 1000), // 2 hours ago
        confidence: 42.0, // 42 aligned hashes
        startOffset: 12.5,
        endOffset: 196.7,
        duration: 184.2,
        engineVersion: "1.0.4",
        status: DetectionStatus.VERIFIED,
      },
    });

    detections.push(detection);
  }

  return detections;
}
