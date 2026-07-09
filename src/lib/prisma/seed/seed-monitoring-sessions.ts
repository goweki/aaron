import {
  Broadcaster,
  MonitoringSession,
  PrismaClient,
  Status,
} from "../generated";

function startOfToday(): Date {
  const date = new Date();

  date.setHours(0, 0, 0, 0);

  return date;
}

export async function seedMonitoringSessions(
  prisma: PrismaClient,
  broadcasters: Broadcaster[],
): Promise<MonitoringSession[]> {
  console.log("📺 Seeding monitoring sessions...");

  const sessions: MonitoringSession[] = [];

  const today = startOfToday();

  for (const broadcaster of broadcasters) {
    const definitions = [
      {
        startedAt: new Date(today.getTime() + 6 * 60 * 60 * 1000), // 06:00
        endedAt: new Date(today.getTime() + 12 * 60 * 60 * 1000), // 12:00
      },
      {
        startedAt: new Date(today.getTime() + 18 * 60 * 60 * 1000), // 18:00
        endedAt: new Date(today.getTime() + 23 * 60 * 60 * 1000), // 23:00
      },
    ];

    for (const definition of definitions) {
      const session = await prisma.monitoringSession.upsert({
        where: {
          broadcasterId_startedAt: {
            broadcasterId: broadcaster.id,
            startedAt: definition.startedAt,
          },
        },
        update: {
          endedAt: definition.endedAt,
          status: Status.ACTIVE,
        },
        create: {
          broadcasterId: broadcaster.id,
          startedAt: definition.startedAt,
          endedAt: definition.endedAt,
          status: Status.ACTIVE,
        },
      });

      sessions.push(session);
    }
  }

  console.log(`✅ ${sessions.length} monitoring sessions seeded.`);

  return sessions;
}
