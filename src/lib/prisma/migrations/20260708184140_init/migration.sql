/*
  Warnings:

  - You are about to drop the column `avatar` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `tel` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_tel_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "avatar",
DROP COLUMN "password",
DROP COLUMN "tel",
ADD COLUMN     "apiKeyHash" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "passwordHash" TEXT,
ADD COLUMN     "phone" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE INDEX "users_apiKeyHash_idx" ON "users"("apiKeyHash");
