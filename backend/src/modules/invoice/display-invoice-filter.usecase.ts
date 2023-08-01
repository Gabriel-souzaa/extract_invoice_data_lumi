import { Injectable } from '@nestjs/common';
import { InvoicePrismaRepository } from '../../data/remote';

@Injectable()
export class DisplayInvoiceFilterUseCase {
  constructor(
    private readonly invoicePrismaRepository: InvoicePrismaRepository,
  ) { }

  async execute(number_client: string, month: string) {
    const invoices = await this.invoicePrismaRepository.filterInvoices(
      month,
      number_client,
    );
    return invoices;
  }
}
