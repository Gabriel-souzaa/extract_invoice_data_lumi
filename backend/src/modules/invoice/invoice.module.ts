import { Module } from '@nestjs/common';
import { PrismaService } from '../../services';
import { AntibioticPrismaRepository } from '../../data/remote';
import { DisplayInvoiceUseCase } from './display-invoice.usecase';
import { InvoiceController } from './invoice.controller';

@Module({
  imports: [],
  controllers: [InvoiceController],
  providers: [PrismaService, AntibioticPrismaRepository, DisplayInvoiceUseCase],
})
export class InvoiceModule { }
