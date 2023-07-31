import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services';
import { IInvoice } from '../../shared/interfaces';

@Injectable()
export class AntibioticPrismaRepository {
  constructor(private readonly prisma: PrismaService) { }

  async createInvoice({
    expiration_date,
    month_reference,
    number_client,
    total_value,
    items_invoice,
  }: IInvoice): Promise<void> {
    await this.prisma.$transaction(async (prismaTransaction) => {
      const invoice = await prismaTransaction.invoice.create({
        data: {
          expiration_date,
          month_reference,
          number_client,
          total_value,
        },
      });

      for (const items of items_invoice) {
        await prismaTransaction.itemsInvoice.create({
          data: {
            invoice_id: invoice.id,
            ...items,
          },
        });
      }
    });
  }

  async getInvoices(): Promise<IInvoice[]> {
    const invoices = await this.prisma.invoice.findMany();
    return invoices;
  }

  async filterInvoicesByNumber(
    number_client: string,
    pageNumber: number,
  ): Promise<IInvoice[]> {
    const skip = (pageNumber - 1) * 10;
    const take = 10;

    const invoices = await this.prisma.invoice.findMany({
      where: {
        number_client: {
          contains: number_client,
          mode: 'insensitive',
        },
      },
      skip,
      take,
    });

    return invoices;
  }
}
