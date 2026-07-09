-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ACTIVE', 'INACTIVE', 'DELETED');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMINISTRATOR', 'SYSTEM');

-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('MUSIC', 'VIDEO');

-- CreateEnum
CREATE TYPE "DetectionStatus" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "tel" TEXT,
    "email" TEXT,
    "password" TEXT,
    "voiceSign" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "avatar" TEXT,
    "resetToken" TEXT,
    "resetTokenExpiry" TIMESTAMP(3),
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assets" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "artist" TEXT,
    "album" TEXT,
    "isrc" TEXT,
    "filename" TEXT,
    "file" TEXT,
    "image" TEXT,
    "type" "AssetType" NOT NULL DEFAULT 'MUSIC',
    "status" "Status" NOT NULL DEFAULT 'INACTIVE',
    "duration" DOUBLE PRECISION,
    "sampleRate" INTEGER,
    "bitRate" INTEGER,
    "channels" INTEGER,
    "fileSize" INTEGER,
    "checksum" TEXT,
    "ownerId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audio_fingerprints" (
    "id" UUID NOT NULL,
    "algorithm" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "fingerprint" JSONB NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assetId" UUID NOT NULL,

    CONSTRAINT "audio_fingerprints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watermarks" (
    "id" UUID NOT NULL,
    "algorithm" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "embeddedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assetId" UUID NOT NULL,

    CONSTRAINT "watermarks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "broadcasters" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "website" TEXT,
    "streamUrl" TEXT,
    "country" TEXT,
    "frequency" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "broadcasters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monitoring_sessions" (
    "id" UUID NOT NULL,
    "broadcasterId" UUID NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3),
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "monitoring_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detections" (
    "id" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "broadcasterId" UUID NOT NULL,
    "sessionId" UUID,
    "broadcastAt" TIMESTAMP(3) NOT NULL,
    "detectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confidence" DOUBLE PRECISION NOT NULL,
    "startOffset" DOUBLE PRECISION,
    "endOffset" DOUBLE PRECISION,
    "duration" DOUBLE PRECISION,
    "engineVersion" TEXT NOT NULL,
    "status" "DetectionStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "detections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_tel_key" ON "users"("tel");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "assets_isrc_key" ON "assets"("isrc");

-- CreateIndex
CREATE UNIQUE INDEX "assets_checksum_key" ON "assets"("checksum");

-- CreateIndex
CREATE INDEX "assets_ownerId_idx" ON "assets"("ownerId");

-- CreateIndex
CREATE INDEX "assets_status_idx" ON "assets"("status");

-- CreateIndex
CREATE INDEX "assets_type_idx" ON "assets"("type");

-- CreateIndex
CREATE UNIQUE INDEX "audio_fingerprints_assetId_key" ON "audio_fingerprints"("assetId");

-- CreateIndex
CREATE UNIQUE INDEX "watermarks_assetId_key" ON "watermarks"("assetId");

-- CreateIndex
CREATE INDEX "monitoring_sessions_broadcasterId_idx" ON "monitoring_sessions"("broadcasterId");

-- CreateIndex
CREATE INDEX "monitoring_sessions_startedAt_idx" ON "monitoring_sessions"("startedAt");

-- CreateIndex
CREATE INDEX "detections_assetId_idx" ON "detections"("assetId");

-- CreateIndex
CREATE INDEX "detections_broadcasterId_idx" ON "detections"("broadcasterId");

-- CreateIndex
CREATE INDEX "detections_sessionId_idx" ON "detections"("sessionId");

-- CreateIndex
CREATE INDEX "detections_broadcastAt_idx" ON "detections"("broadcastAt");

-- CreateIndex
CREATE INDEX "detections_assetId_broadcastAt_idx" ON "detections"("assetId", "broadcastAt");

-- CreateIndex
CREATE INDEX "detections_broadcasterId_broadcastAt_idx" ON "detections"("broadcasterId", "broadcastAt");

-- AddForeignKey
ALTER TABLE "assets" ADD CONSTRAINT "assets_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audio_fingerprints" ADD CONSTRAINT "audio_fingerprints_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watermarks" ADD CONSTRAINT "watermarks_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monitoring_sessions" ADD CONSTRAINT "monitoring_sessions_broadcasterId_fkey" FOREIGN KEY ("broadcasterId") REFERENCES "broadcasters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detections" ADD CONSTRAINT "detections_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detections" ADD CONSTRAINT "detections_broadcasterId_fkey" FOREIGN KEY ("broadcasterId") REFERENCES "broadcasters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detections" ADD CONSTRAINT "detections_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "monitoring_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
