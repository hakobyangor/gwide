-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "currencyId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
