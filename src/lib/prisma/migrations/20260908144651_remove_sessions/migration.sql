/*
  Warnings:

  - You are about to drop the column `sessionId` on the `detections` table. All the data in the column will be lost.
  - You are about to drop the `monitoring_sessions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "detections" DROP CONSTRAINT "detections_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "monitoring_sessions" DROP CONSTRAINT "monitoring_sessions_broadcasterId_fkey";

-- DropIndex
DROP INDEX "detections_sessionId_idx";

-- AlterTable
ALTER TABLE "detections" DROP COLUMN "sessionId";

-- DropTable
DROP TABLE "monitoring_sessions";
