/*
  Warnings:

  - You are about to drop the `FavoriteTours` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavoriteTours" DROP CONSTRAINT "FavoriteTours_tourId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteTours" DROP CONSTRAINT "FavoriteTours_userId_fkey";

-- DropTable
DROP TABLE "FavoriteTours";

-- CreateTable
CREATE TABLE "FavoriteTour" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FavoriteTour_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavoriteTour" ADD CONSTRAINT "FavoriteTour_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteTour" ADD CONSTRAINT "FavoriteTour_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
