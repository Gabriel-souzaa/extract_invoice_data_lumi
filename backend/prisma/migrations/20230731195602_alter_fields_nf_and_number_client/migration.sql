/*
  Warnings:

  - You are about to drop the column `nf` on the `InvoiceHistory` table. All the data in the column will be lost.
  - You are about to drop the column `number_client` on the `invoices` table. All the data in the column will be lost.
  - Added the required column `number_client` to the `InvoiceHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nf` to the `invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceHistory" DROP COLUMN "nf",
ADD COLUMN     "number_client" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "number_client",
ADD COLUMN     "nf" TEXT NOT NULL;
