import { Prisma } from "@/lib/prisma/generated";

// USER

export const userIncludes = Prisma.validator<Prisma.UserInclude>()({
  assets: true,
});

export type UserWithRelations = Prisma.UserGetPayload<{
  include: typeof userIncludes;
}>;

// ASSET

export const assetIncludes = Prisma.validator<Prisma.AssetInclude>()({
  owner: true,
  detections: true,
  watermark: true,
  hashes: true,
  fingerprint: true,
});

export type AssetWithRelations = Prisma.AssetGetPayload<{
  include: typeof assetIncludes;
}>;

// BROADCASTER

export const broadcasterIncludes =
  Prisma.validator<Prisma.BroadcasterInclude>()({
    detections: true,
    monitoringSessions: true,
  });

export type BroadcasterWithRelations = Prisma.BroadcasterGetPayload<{
  include: typeof broadcasterIncludes;
}>;

// DETECTION

export const detectionIncludes = Prisma.validator<Prisma.DetectionInclude>()({
  asset: { include: { owner: true, fingerprint: true, watermark: true } },
  broadcaster: true,
  session: true,
});

export type DetectionWithRelations = Prisma.DetectionGetPayload<{
  include: typeof detectionIncludes;
}>;
