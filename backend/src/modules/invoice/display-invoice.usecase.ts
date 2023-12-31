import { Injectable } from '@nestjs/common';
import { InvoicePrismaRepository } from '../../data/remote';

@Injectable()
export class DisplayInvoiceUseCase {
  constructor(
    private readonly invoicePrismaRepository: InvoicePrismaRepository,
  ) { }

  async execute() {
    const invoices = await this.invoicePrismaRepository.getInvoices();
    return invoices;
  }
}
