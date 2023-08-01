import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { DisplayInvoiceDto, ParamsInvoiceDto } from '../../shared/dtos';
import { DisplayInvoiceUseCase } from './display-invoice.usecase';
import { DisplayInvoiceFilterUseCase } from './display-invoice-filter.usecase';

@Controller('api/invoice')
@ApiTags('Invoice')
export class InvoiceController {
  constructor(
    private readonly displayInvoiceUseCase: DisplayInvoiceUseCase,
    private readonly displayInvoiceFilterUseCase: DisplayInvoiceFilterUseCase,
  ) { }

  @Get()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    description: 'Listar informações da nota fiscal.',
  })
  @ApiOkResponse({
    description: 'Dados obtidos com sucesso.',
    type: [DisplayInvoiceDto],
  })
  async getInvoices() {
    return await this.displayInvoiceUseCase.execute();
  }

  @Get('filter')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    description: 'Filtrar informações por UC e Mês',
  })
  @ApiOkResponse({
    description: 'Dados obtidos com sucesso.',
  })
  async getInvoicesFilter(@Query() { number_client, month }: ParamsInvoiceDto) {
    return await this.displayInvoiceFilterUseCase.execute(number_client, month);
  }
}
