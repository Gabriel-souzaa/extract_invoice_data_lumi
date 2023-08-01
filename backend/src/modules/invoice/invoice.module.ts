import { Module } from '@nestjs/common';
import { PrismaService } from '../../services';
import { InvoicePrismaRepository } from '../../data/remote';
import { DisplayInvoiceUseCase } from './display-invoice.usecase';
import { InvoiceController } from './invoice.controller';
import { DisplayInvoiceFilterUseCase } from './display-invoice-filter.usecase';

@Module({
  imports: [],
  controllers: [InvoiceController],
  providers: [
    PrismaService,
    InvoicePrismaRepository,
    DisplayInvoiceUseCase,
    DisplayInvoiceFilterUseCase,
  ],
})
export class InvoiceModule { }
