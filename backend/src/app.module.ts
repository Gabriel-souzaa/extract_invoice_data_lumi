import { Module } from '@nestjs/common';
import { ExtractorModule } from './modules/extractor/extractor.module';
import { InvoiceModule } from './modules/invoice/invoice.module';

@Module({
  imports: [ExtractorModule, InvoiceModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
