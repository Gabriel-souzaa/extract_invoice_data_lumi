import { ApiProperty } from '@nestjs/swagger';

export class DisplayInvoiceDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  number_client: string;

  @ApiProperty()
  month_reference: string;

  @ApiProperty()
  expiration_date: string;

  @ApiProperty()
  total_value: string;
}
