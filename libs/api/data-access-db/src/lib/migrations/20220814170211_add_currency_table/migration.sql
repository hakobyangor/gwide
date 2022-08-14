-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "maxCapacity" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL DEFAULT 2;

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);
