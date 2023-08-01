/*
  Warnings:

  - You are about to drop the column `number_client` on the `InvoiceHistory` table. All the data in the column will be lost.
  - Added the required column `number_client` to the `invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceHistory" DROP COLUMN "number_client";

-- AlterTable
ALTER TABLE "invoices" ADD COLUMN     "number_client" TEXT NOT NULL;
