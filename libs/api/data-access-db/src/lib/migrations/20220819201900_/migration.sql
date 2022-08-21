/*
  Warnings:

  - You are about to drop the `Languages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TourLanguages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TourLanguages" DROP CONSTRAINT "TourLanguages_languageId_fkey";

-- DropForeignKey
ALTER TABLE "TourLanguages" DROP CONSTRAINT "TourLanguages_tourId_fkey";

-- DropTable
DROP TABLE "Languages";

-- DropTable
DROP TABLE "TourLanguages";

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourLanguage" (
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "tourId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "TourLanguage_pkey" PRIMARY KEY ("tourId","languageId")
);

-- AddForeignKey
ALTER TABLE "TourLanguage" ADD CONSTRAINT "TourLanguage_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourLanguage" ADD CONSTRAINT "TourLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
