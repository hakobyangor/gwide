/*
  Warnings:

  - You are about to drop the column `rating` on the `TourReview` table. All the data in the column will be lost.
  - Added the required column `rate` to the `TourReview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TourReview" DROP COLUMN "rating",
ADD COLUMN     "rate" INTEGER NOT NULL;
