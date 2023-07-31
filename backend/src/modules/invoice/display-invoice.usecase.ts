import { Injectable } from '@nestjs/common';
import { AntibioticPrismaRepository } from '../../data/remote';

@Injectable()
export class DisplayInvoiceUseCase {
  constructor(
    private readonly invoicePrismaRepository: AntibioticPrismaRepository,
  ) { }

  async execute() {
    const invoices = await this.invoicePrismaRepository.getInvoices();
    return invoices;
  }
}
