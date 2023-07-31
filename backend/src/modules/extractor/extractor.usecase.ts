import { Injectable } from '@nestjs/common';
import { UseCaseException } from '../../utils/exceptions/useCase.exceptions';
import { AntibioticPrismaRepository } from '../../data/remote';
import { PdfReaderService } from '../../services';

@Injectable()
export class ExtractorUseCase {
  constructor(
    private readonly invoicePrismaRepository: AntibioticPrismaRepository,
    private readonly pdfReaderService: PdfReaderService,
  ) { }

  async execute({ fileBuffer }): Promise<any> {
    try {
      const invoiceData = await this.pdfReaderService.handle(fileBuffer);

      await this.invoicePrismaRepository.createInvoice({
        ...invoiceData,
      });
    } catch (err) {
      throw new UseCaseException(err.message, 400);
    }
  }
}
