/*
  Warnings:

  - You are about to drop the column `nf` on the `invoices` table. All the data in the column will be lost.
  - Added the required column `nf` to the `InvoiceHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceHistory" ADD COLUMN     "nf" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "nf";
