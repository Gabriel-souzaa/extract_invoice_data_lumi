-- CreateTable
CREATE TABLE "invoices" (
    "id" SERIAL NOT NULL,
    "number_client" TEXT NOT NULL,
    "month_reference" TEXT NOT NULL,
    "expiration_date" TEXT NOT NULL,
    "total_value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items_invoice" (
    "id" SERIAL NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    "name_item" TEXT NOT NULL,
    "measure_unit" TEXT,
    "quantity" TEXT,
    "price_unit" TEXT,
    "total_value" TEXT NOT NULL,

    CONSTRAINT "items_invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items_invoice" ADD CONSTRAINT "items_invoice_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
