import { ApiProperty } from '@nestjs/swagger';
import {
  IConsumptionHistory,
  InvoiceHistory,
} from '../interfaces/invoice.interface';

export class DisplayInvoiceDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  number_client: string;

  @ApiProperty()
  invoice_history: InvoiceHistory[];

  @ApiProperty()
  consumption_history: IConsumptionHistory[];
}
