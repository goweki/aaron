import { Prisma } from "@/lib/prisma/generated";

export const userIncludes = Prisma.validator<Prisma.UserInclude>()({
  assets: true,
});

export type UserWithRelations = Prisma.UserGetPayload<{
  include: typeof userIncludes;
}>;

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
