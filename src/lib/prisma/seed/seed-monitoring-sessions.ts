import {
  PrismaClient,
  Broadcaster,
  MonitoringSession,
  Status,
} from "../generated";

export async function seedMonitoringSessions(
  prisma: PrismaClient,
  broadcasters: Broadcaster[],
): Promise<MonitoringSession[]> {
  console.log("➡️ Seeding Monitoring Sessions...");

  const sessions: MonitoringSession[] = [];

  for (const b of broadcasters) {
    const session = await prisma.monitoringSession.create({
      data: {
        broadcasterId: b.id,
        startedAt: new Date(Date.now() - 3600 * 24 * 1000), // 24 hours ago
        endedAt: new Date(),
        status: Status.ACTIVE,
      },
    });
    sessions.push(session);
  }

  return sessions;
}
