import { Module } from '@nestjs/common';
import { ExtractorModule } from './modules/extractor/extractor.module';

@Module({
  imports: [ExtractorModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
