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
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "voiceSign" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "image" TEXT,
    "resetToken" TEXT,
    "resetTokenExpiry" TIMESTAMP(3),
    "apiKeyHash" TEXT,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assets" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
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
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audio_fingerprints" (
    "id" TEXT NOT NULL,
    "algorithm" TEXT NOT NULL DEFAULT 'landmark',
    "version" TEXT NOT NULL DEFAULT '1.0.4',
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assetId" TEXT NOT NULL,

    CONSTRAINT "audio_fingerprints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fingerprint_hashes" (
    "id" BIGSERIAL NOT NULL,
    "hash" BIGINT NOT NULL,
    "offsetMs" INTEGER NOT NULL,
    "audioFingerprintId" TEXT NOT NULL,
    "assetId" TEXT NOT NULL,

    CONSTRAINT "fingerprint_hashes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watermarks" (
    "id" TEXT NOT NULL,
    "algorithm" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "embeddedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assetId" TEXT NOT NULL,

    CONSTRAINT "watermarks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "broadcasters" (
    "id" TEXT NOT NULL,
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
    "id" TEXT NOT NULL,
    "broadcasterId" TEXT NOT NULL,
    "audioLink" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3),
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "monitoring_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detections" (
    "id" TEXT NOT NULL,
    "assetId" TEXT NOT NULL,
    "broadcasterId" TEXT NOT NULL,
    "sessionId" TEXT,
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
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_apiKeyHash_idx" ON "users"("apiKeyHash");

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
CREATE INDEX "fingerprint_hashes_hash_assetId_offsetMs_idx" ON "fingerprint_hashes"("hash", "assetId", "offsetMs");

-- CreateIndex
CREATE INDEX "fingerprint_hashes_assetId_idx" ON "fingerprint_hashes"("assetId");

-- CreateIndex
CREATE UNIQUE INDEX "watermarks_assetId_key" ON "watermarks"("assetId");

-- CreateIndex
CREATE UNIQUE INDEX "broadcasters_name_key" ON "broadcasters"("name");

-- CreateIndex
CREATE UNIQUE INDEX "broadcasters_streamUrl_key" ON "broadcasters"("streamUrl");

-- CreateIndex
CREATE INDEX "monitoring_sessions_broadcasterId_idx" ON "monitoring_sessions"("broadcasterId");

-- CreateIndex
CREATE INDEX "monitoring_sessions_startedAt_idx" ON "monitoring_sessions"("startedAt");

-- CreateIndex
CREATE UNIQUE INDEX "monitoring_sessions_broadcasterId_startedAt_key" ON "monitoring_sessions"("broadcasterId", "startedAt");

-- CreateIndex
CREATE INDEX "detections_broadcasterId_status_broadcastAt_idx" ON "detections"("broadcasterId", "status", "broadcastAt");

-- CreateIndex
CREATE INDEX "detections_status_idx" ON "detections"("status");

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

-- CreateIndex
CREATE UNIQUE INDEX "detections_assetId_broadcasterId_broadcastAt_key" ON "detections"("assetId", "broadcasterId", "broadcastAt");

-- AddForeignKey
ALTER TABLE "assets" ADD CONSTRAINT "assets_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audio_fingerprints" ADD CONSTRAINT "audio_fingerprints_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fingerprint_hashes" ADD CONSTRAINT "fingerprint_hashes_audioFingerprintId_fkey" FOREIGN KEY ("audioFingerprintId") REFERENCES "audio_fingerprints"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fingerprint_hashes" ADD CONSTRAINT "fingerprint_hashes_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
