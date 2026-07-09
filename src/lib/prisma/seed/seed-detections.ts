import {
  Asset,
  Broadcaster,
  Detection,
  DetectionStatus,
  MonitoringSession,
  PrismaClient,
} from "../generated";

/**
 * Produces a deterministic confidence score
 * between 0.75 and 0.99.
 */
function confidence(assetId: string, broadcasterId: string): number {
  const seed = [
    ...assetId.replace(/-/g, ""),
    ...broadcasterId.replace(/-/g, ""),
  ]
    .map((c) => c.charCodeAt(0))
    .reduce((a, b) => a + b, 0);

  return Number((0.75 + (seed % 25) / 100).toFixed(2));
}

export async function seedDetections(
  prisma: PrismaClient,
  assets: Asset[],
  broadcasters: Broadcaster[],
  sessions: MonitoringSession[],
): Promise<Detection[]> {
  console.log("🎯 Seeding detections...");

  const detections: Detection[] = [];

  const sessionsByBroadcaster = new Map<string, MonitoringSession[]>();

  for (const session of sessions) {
    const list = sessionsByBroadcaster.get(session.broadcasterId) ?? [];

    list.push(session);

    sessionsByBroadcaster.set(session.broadcasterId, list);
  }

  for (const broadcaster of broadcasters) {
    const broadcasterSessions = sessionsByBroadcaster.get(broadcaster.id) ?? [];

    for (const session of broadcasterSessions) {
      for (const [index, asset] of assets.entries()) {
        // Spread detections through the monitoring session
        const broadcastAt = new Date(
          session.startedAt.getTime() + (index + 1) * 15 * 60 * 1000,
        );

        const confidenceScore = confidence(asset.id, broadcaster.id);

        const data = {
          assetId: asset.id,
          broadcasterId: broadcaster.id,
          sessionId: session.id,

          broadcastAt,

          detectedAt: new Date(broadcastAt.getTime() + 1500),

          confidence: confidenceScore,

          startOffset: 0,
          endOffset: asset.duration ?? 30,
          duration: asset.duration ?? 30,

          engineVersion: "stream-audio-fingerprint v1.0",

          status:
            confidenceScore >= 0.9
              ? DetectionStatus.VERIFIED
              : DetectionStatus.PENDING,
        };

        const detection = await prisma.detection.upsert({
          where: {
            assetId_broadcasterId_broadcastAt: {
              assetId: asset.id,
              broadcasterId: broadcaster.id,
              broadcastAt,
            },
          },

          update: {
            ...data,
          },

          create: {
            ...data,
          },
        });

        detections.push(detection);
      }
    }
  }

  console.log(`✅ ${detections.length} detections seeded.`);

  return detections;
}
