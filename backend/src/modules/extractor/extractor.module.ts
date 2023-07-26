import { Module } from '@nestjs/common';
import { ExtractorController } from './extractor.controller';
import { PrismaService } from '../../services/prisma.service';

@Module({
  imports: [],
  controllers: [ExtractorController],
  providers: [PrismaService],
})
export class ExtractorModule { }
