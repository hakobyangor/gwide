/*
  Warnings:

  - You are about to drop the column `userId` on the `BookingReview` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookingReview" DROP CONSTRAINT "BookingReview_userId_fkey";

-- AlterTable
ALTER TABLE "BookingReview" DROP COLUMN "userId";
