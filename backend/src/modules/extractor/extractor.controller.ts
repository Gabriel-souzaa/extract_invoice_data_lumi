import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';

import { ExtractorDto } from '../../shared/dtos';
import { ExtractorUseCase } from './extractor.usecase';

@Controller('api/extractor')
@ApiTags('Extractor')
export class ExtractorController {
  constructor(private readonly extractorUseCase: ExtractorUseCase) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    description: 'Extrair imformações da nota fiscal.',
  })
  @ApiBody({
    description: 'Corpo da requisição',
    type: ExtractorDto,
  })
  @ApiOkResponse({
    description: 'Dados obtidos com sucesso.',
  })
  @UseInterceptors(FilesInterceptor('attachment'))
  async extractor(@UploadedFiles() attachment: Array<Express.Multer.File>) {
    await this.extractorUseCase.execute({
      fileBuffer: attachment[0].buffer,
    });
  }
}
