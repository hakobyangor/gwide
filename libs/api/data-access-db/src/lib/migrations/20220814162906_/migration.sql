/*
  Warnings:

  - Added the required column `guideId` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "guideId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_guideId_fkey" FOREIGN KEY ("guideId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
