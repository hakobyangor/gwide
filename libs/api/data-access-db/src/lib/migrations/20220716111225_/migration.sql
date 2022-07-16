-- CreateTable
CREATE TABLE "GuideCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GuideCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuideGuideCategory" (
    "status" "Status" NOT NULL DEFAULT E'ACTIVE',
    "userId" INTEGER NOT NULL,
    "guideCategoryId" INTEGER NOT NULL,

    CONSTRAINT "GuideGuideCategory_pkey" PRIMARY KEY ("userId","guideCategoryId")
);

-- AddForeignKey
ALTER TABLE "GuideGuideCategory" ADD CONSTRAINT "GuideGuideCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuideGuideCategory" ADD CONSTRAINT "GuideGuideCategory_guideCategoryId_fkey" FOREIGN KEY ("guideCategoryId") REFERENCES "GuideCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
