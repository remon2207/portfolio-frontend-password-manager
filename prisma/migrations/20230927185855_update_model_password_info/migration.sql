/*
  Warnings:

  - You are about to drop the column `isTwoFactor` on the `passwords_info` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "passwords_info" DROP COLUMN "isTwoFactor",
ADD COLUMN     "is_two_factor" BOOLEAN NOT NULL DEFAULT false;
