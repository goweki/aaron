/*
  Warnings:

  - You are about to drop the column `fingerprint` on the `audio_fingerprints` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "audio_fingerprints" DROP COLUMN "fingerprint",
ALTER COLUMN "algorithm" SET DEFAULT 'landmark',
ALTER COLUMN "version" SET DEFAULT '1.0.4';

-- CreateTable
CREATE TABLE "fingerprint_hashes" (
    "id" UUID NOT NULL,
    "hash" BIGINT NOT NULL,
    "offsetMs" INTEGER NOT NULL,
    "audioFingerprintId" UUID NOT NULL,
    "assetId" UUID NOT NULL,

    CONSTRAINT "fingerprint_hashes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "fingerprint_hashes_hash_idx" ON "fingerprint_hashes"("hash");

-- CreateIndex
CREATE INDEX "fingerprint_hashes_assetId_idx" ON "fingerprint_hashes"("assetId");

-- AddForeignKey
ALTER TABLE "fingerprint_hashes" ADD CONSTRAINT "fingerprint_hashes_audioFingerprintId_fkey" FOREIGN KEY ("audioFingerprintId") REFERENCES "audio_fingerprints"("id") ON DELETE CASCADE ON UPDATE CASCADE;
