/*
  Warnings:

  - You are about to drop the column `invoiceHistoryId` on the `items_invoice` table. All the data in the column will be lost.
  - You are about to drop the column `invoice_id` on the `items_invoice` table. All the data in the column will be lost.
  - Added the required column `invoice_history_id` to the `items_invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "items_invoice" DROP CONSTRAINT "items_invoice_invoiceHistoryId_fkey";

-- AlterTable
ALTER TABLE "items_invoice" DROP COLUMN "invoiceHistoryId",
DROP COLUMN "invoice_id",
ADD COLUMN     "invoice_history_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "items_invoice" ADD CONSTRAINT "items_invoice_invoice_history_id_fkey" FOREIGN KEY ("invoice_history_id") REFERENCES "InvoiceHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
