-- CreateTable
CREATE TABLE "GuideCity" (
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "userId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "GuideCity_pkey" PRIMARY KEY ("userId","cityId")
);

-- AddForeignKey
ALTER TABLE "GuideCity" ADD CONSTRAINT "GuideCity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuideCity" ADD CONSTRAINT "GuideCity_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
