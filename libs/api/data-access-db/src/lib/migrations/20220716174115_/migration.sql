-- DropForeignKey
ALTER TABLE "GuideLanguages" DROP CONSTRAINT "GuideLanguages_languageId_fkey";

-- AlterTable
ALTER TABLE "GuideLanguages" ADD COLUMN     "cityId" INTEGER;

-- AddForeignKey
ALTER TABLE "GuideLanguages" ADD CONSTRAINT "GuideLanguages_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuideLanguages" ADD CONSTRAINT "GuideLanguages_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
