/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "YesNo" AS ENUM ('YES', 'NO');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "isVerified" "YesNo" NOT NULL DEFAULT E'NO',
ADD COLUMN     "lastName" TEXT;
