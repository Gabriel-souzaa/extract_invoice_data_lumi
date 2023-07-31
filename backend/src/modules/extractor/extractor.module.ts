import { Module } from '@nestjs/common';
import { ExtractorController } from './extractor.controller';
import { PrismaService, PdfReaderService } from '../../services';
import { ExtractorUseCase } from './extractor.usecase';
import { AntibioticPrismaRepository } from '../../data/remote';

@Module({
  imports: [],
  controllers: [ExtractorController],
  providers: [
    PrismaService,
    PdfReaderService,
    ExtractorUseCase,
    AntibioticPrismaRepository,
  ],
})
export class ExtractorModule { }
