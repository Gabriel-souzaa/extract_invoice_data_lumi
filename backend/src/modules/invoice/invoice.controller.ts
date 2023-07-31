import { Controller, Get, UseInterceptors } from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';

import { DisplayInvoiceDto } from '../../shared/dtos';
import { DisplayInvoiceUseCase } from './display-invoice.usecase';

@Controller('api/invoice')
@ApiTags('Invoice')
export class InvoiceController {
  constructor(private readonly displayInvoiceUseCase: DisplayInvoiceUseCase) { }

  @Get()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    description: 'Listar imformações da nota fiscal.',
  })
  @ApiOkResponse({
    description: 'Dados obtidos com sucesso.',
    type: [DisplayInvoiceDto],
  })
  async getInvoices() {
    return await this.displayInvoiceUseCase.execute();
  }

  async;
}
