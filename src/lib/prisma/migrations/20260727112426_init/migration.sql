/*
  Warnings:

  - The primary key for the `fingerprint_hashes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fingerprint_hashes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "fingerprint_hashes_hash_idx";

-- AlterTable
ALTER TABLE "fingerprint_hashes" DROP CONSTRAINT "fingerprint_hashes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "fingerprint_hashes_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "fingerprint_hashes_hash_assetId_offsetMs_idx" ON "fingerprint_hashes"("hash", "assetId", "offsetMs");

-- AddForeignKey
ALTER TABLE "fingerprint_hashes" ADD CONSTRAINT "fingerprint_hashes_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
