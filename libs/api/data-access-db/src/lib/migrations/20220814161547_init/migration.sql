-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'GUIDE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'PENDING', 'DRAFT', 'INACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "YesNo" AS ENUM ('YES', 'NO');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'PENDING',
    "image" TEXT,
    "countryId" INTEGER,
    "role" "UserRole" NOT NULL,
    "bio" TEXT,
    "hash" TEXT,
    "hashExpiredAt" TIMESTAMP(3),
    "rating" DOUBLE PRECISION DEFAULT 5,
    "isVerified" "YesNo" NOT NULL DEFAULT E'NO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tour" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "countryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TourCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourTourCategory" (
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "tourId" INTEGER NOT NULL,
    "tourCategoryId" INTEGER NOT NULL,

    CONSTRAINT "TourTourCategory_pkey" PRIMARY KEY ("tourId","tourCategoryId")
);

-- CreateTable
CREATE TABLE "TourCity" (
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "tourId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "TourCity_pkey" PRIMARY KEY ("tourId","cityId")
);

-- CreateTable
CREATE TABLE "Languages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourLanguages" (
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "tourId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "TourLanguages_pkey" PRIMARY KEY ("tourId","languageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourTourCategory" ADD CONSTRAINT "TourTourCategory_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourTourCategory" ADD CONSTRAINT "TourTourCategory_tourCategoryId_fkey" FOREIGN KEY ("tourCategoryId") REFERENCES "TourCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourCity" ADD CONSTRAINT "TourCity_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourCity" ADD CONSTRAINT "TourCity_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourLanguages" ADD CONSTRAINT "TourLanguages_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourLanguages" ADD CONSTRAINT "TourLanguages_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
