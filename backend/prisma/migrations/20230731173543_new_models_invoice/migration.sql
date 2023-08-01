/*
  Warnings:

  - You are about to drop the column `expiration_date` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `total_value` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the `MonthReferenceHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MonthReferenceHistory" DROP CONSTRAINT "MonthReferenceHistory_invoice_id_fkey";

-- DropForeignKey
ALTER TABLE "items_invoice" DROP CONSTRAINT "items_invoice_invoice_id_fkey";

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "expiration_date",
DROP COLUMN "total_value";

-- AlterTable
ALTER TABLE "items_invoice" ADD COLUMN     "invoiceHistoryId" INTEGER;

-- DropTable
DROP TABLE "MonthReferenceHistory";

-- CreateTable
CREATE TABLE "InvoiceHistory" (
    "id" SERIAL NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    "month_reference" "MonthReferenceType" NOT NULL,
    "year" TEXT NOT NULL,
    "expiration_date" TEXT NOT NULL,
    "total_value" TEXT NOT NULL,

    CONSTRAINT "InvoiceHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items_invoice" ADD CONSTRAINT "items_invoice_invoiceHistoryId_fkey" FOREIGN KEY ("invoiceHistoryId") REFERENCES "InvoiceHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceHistory" ADD CONSTRAINT "InvoiceHistory_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
