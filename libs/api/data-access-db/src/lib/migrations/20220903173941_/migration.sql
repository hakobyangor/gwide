/*
  Warnings:

  - Added the required column `durationHours` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationMinutes` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TourType" AS ENUM ('INDIVIDUAL', 'GROUP');

-- CreateEnum
CREATE TYPE "TourFormat" AS ENUM ('ON_FOOT', 'BY_CAR');

-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "durationHours" INTEGER NOT NULL,
ADD COLUMN     "durationMinutes" INTEGER NOT NULL,
ADD COLUMN     "format" "TourFormat" NOT NULL DEFAULT E'ON_FOOT',
ADD COLUMN     "image" TEXT,
ADD COLUMN     "rating" DOUBLE PRECISION DEFAULT 5,
ADD COLUMN     "type" "TourType" NOT NULL DEFAULT E'INDIVIDUAL';

-- CreateTable
CREATE TABLE "TourReview" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "tourId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "TourReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourImage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "image" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tourId" INTEGER,

    CONSTRAINT "TourImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TourReview" ADD CONSTRAINT "TourReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourReview" ADD CONSTRAINT "TourReview_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourImage" ADD CONSTRAINT "TourImage_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;
