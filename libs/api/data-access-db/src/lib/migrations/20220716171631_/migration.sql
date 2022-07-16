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
CREATE TABLE "GuideLanguages" (
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "userId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "GuideLanguages_pkey" PRIMARY KEY ("userId","languageId")
);

-- AddForeignKey
ALTER TABLE "GuideLanguages" ADD CONSTRAINT "GuideLanguages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuideLanguages" ADD CONSTRAINT "GuideLanguages_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
