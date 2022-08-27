/*
  Warnings:

  - Made the column `catId` on table `CatTags` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CatTags" DROP CONSTRAINT "CatTags_catId_fkey";

-- AlterTable
ALTER TABLE "CatTags" ALTER COLUMN "catId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CatTags" ADD CONSTRAINT "CatTags_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
