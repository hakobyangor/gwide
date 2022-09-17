/*
  Warnings:

  - You are about to drop the `TourReview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TourReview" DROP CONSTRAINT "TourReview_tourId_fkey";

-- DropForeignKey
ALTER TABLE "TourReview" DROP CONSTRAINT "TourReview_userId_fkey";

-- DropTable
DROP TABLE "TourReview";

-- CreateTable
CREATE TABLE "BookingReview" (
    "id" SERIAL NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rate" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "bookingId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "BookingReview_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookingReview" ADD CONSTRAINT "BookingReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingReview" ADD CONSTRAINT "BookingReview_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;
