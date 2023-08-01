/*
  Warnings:

  - Added the required column `nf` to the `InvoiceHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceHistory" ADD COLUMN     "nf" TEXT NOT NULL;
