/*
  Warnings:

  - You are about to drop the column `catId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_catId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "catId";

-- CreateTable
CREATE TABLE "CatTags" (
    "tagId" SERIAL NOT NULL,
    "catId" INTEGER,

    CONSTRAINT "CatTags_pkey" PRIMARY KEY ("tagId")
);

-- AddForeignKey
ALTER TABLE "CatTags" ADD CONSTRAINT "CatTags_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
