import { Injectable } from '@nestjs/common';
import { UseCaseException } from '../../utils/exceptions/useCase.exceptions';
import { InvoicePrismaRepository } from '../../data/remote';
import { PdfReaderService } from '../../services';

@Injectable()
export class ExtractorUseCase {
  constructor(
    private readonly invoicePrismaRepository: InvoicePrismaRepository,
    private readonly pdfReaderService: PdfReaderService,
  ) { }

  async execute({ fileBuffer }): Promise<any> {
    try {
      const invoiceData = await this.pdfReaderService.handle(fileBuffer);

      const invoiceNf = await this.invoicePrismaRepository.findInvoiceNf(
        invoiceData.number_client,
        invoiceData.nf,
      );

      if (invoiceNf) {
        throw new UseCaseException('Nf já adicionada.', 400);
      }

      await this.invoicePrismaRepository.createInvoice({
        ...invoiceData,
      });
    } catch (err) {
      throw new UseCaseException(err.messageTreated || err.message, 404);
    }
  }
}
