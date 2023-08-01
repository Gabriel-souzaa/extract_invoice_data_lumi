import { Module } from '@nestjs/common';
import { ExtractorController } from './extractor.controller';
import { PrismaService, PdfReaderService } from '../../services';
import { ExtractorUseCase } from './extractor.usecase';
import { InvoicePrismaRepository } from '../../data/remote';

@Module({
  imports: [],
  controllers: [ExtractorController],
  providers: [
    PrismaService,
    PdfReaderService,
    ExtractorUseCase,
    InvoicePrismaRepository,
  ],
})
export class ExtractorModule { }
