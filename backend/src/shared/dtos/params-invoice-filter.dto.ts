import { ApiProperty } from '@nestjs/swagger';

export class ParamsInvoiceDto {
  @ApiProperty({
    required: false,
  })
  number_client: string;

  @ApiProperty({
    required: false,
  })
  month: string;
}
