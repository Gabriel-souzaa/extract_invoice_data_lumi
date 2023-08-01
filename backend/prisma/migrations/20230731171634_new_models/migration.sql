/*
  Warnings:

  - You are about to drop the column `month_reference` on the `invoices` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "MonthReferenceType" AS ENUM ('JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ');

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "month_reference";

-- CreateTable
CREATE TABLE "MonthReferenceHistory" (
    "id" SERIAL NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    "month_reference" "MonthReferenceType" NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "MonthReferenceHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consumption_history" (
    "id" SERIAL NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    "month_reference" "MonthReferenceType" NOT NULL,
    "year" TEXT NOT NULL,
    "consumption" TEXT NOT NULL,
    "average" TEXT NOT NULL,
    "days" TEXT NOT NULL,

    CONSTRAINT "consumption_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MonthReferenceHistory" ADD CONSTRAINT "MonthReferenceHistory_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consumption_history" ADD CONSTRAINT "consumption_history_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
