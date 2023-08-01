import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services';
import {
  IConsumptionHistory,
  ICratedInvoice,
  IInvoice,
  InvoiceHistory,
  MonthReferenceType,
} from '../../shared/interfaces';

@Injectable()
export class InvoicePrismaRepository {
  constructor(private readonly prisma: PrismaService) { }

  async createInvoice({
    number_client,
    consumption_history,
    month_reference,
    total_value,
    expiration_date,
    items_invoice,
    nf,
  }: ICratedInvoice): Promise<void> {
    await this.prisma.$transaction(async (prismaTransaction) => {
      let invoice: number;

      const findInvoice = await prismaTransaction.invoice.findFirst({
        where: {
          number_client,
        },
      });

      if (!findInvoice) {
        const createInvoice = await prismaTransaction.invoice.create({
          data: {
            number_client,
          },
        });

        invoice = createInvoice.id;
      } else {
        invoice = findInvoice.id;
      }

      const [month, year] = month_reference.split('/');

      const history_invoice = await prismaTransaction.invoiceHistory.create({
        data: {
          invoice_id: invoice,
          month_reference: MonthReferenceType[month],
          year,
          total_value,
          expiration_date,
          nf,
        },
      });

      for (const items of items_invoice) {
        await prismaTransaction.itemsInvoice.create({
          data: {
            invoice_history_id: history_invoice.id,
            ...items,
          },
        });
      }

      for (const items of consumption_history) {
        const {
          average,
          consumption,
          days,
          month_reference: month_consumption_history,
        } = items;

        const [month_consumption, year_consumption] =
          month_consumption_history.split('/');

        const verifyMonthYear = await this.verifyConsumptionHistory(
          month_consumption,
          year_consumption,
        );

        if (!verifyMonthYear) {
          await prismaTransaction.consumptionHistory.create({
            data: {
              invoice_id: invoice,
              average,
              consumption,
              days,
              month_reference: MonthReferenceType[month_consumption],
              year: year_consumption,
            },
          });
        }
      }
    });
  }

  async getInvoices(): Promise<IInvoice[]> {
    const invoices = await this.prisma.invoice.findMany({
      select: {
        id: true,
        number_client: true,
        invoice_history: true,
        consumption_history: true,
      },
    });

    return invoices;
  }

  async findInvoiceNf(
    number_client: string,
    nf: string,
  ): Promise<InvoiceHistory> {
    const invoice = await this.prisma.invoice.findFirst({
      where: {
        number_client,
      },
    });

    if (!invoice) {
      return;
    }

    const invoiceNf = await this.prisma.invoiceHistory.findFirst({
      where: {
        invoice_id: invoice.id,
        nf,
      },
    });

    return invoiceNf;
  }

  async filterInvoices(
    month: string,
    number_client: string,
  ): Promise<IInvoice[]> {
    const invoices = await this.prisma.invoice.findMany({
      where: {
        number_client: {
          contains: number_client,
          mode: 'insensitive',
        },
      },
      include: {
        invoice_history: {
          where: {
            month_reference: {
              equals: MonthReferenceType[month],
            },
          },
        },
      },
    });

    return invoices;
  }

  async verifyConsumptionHistory(
    month: string,
    year: string,
  ): Promise<IConsumptionHistory> {
    const data = await this.prisma.consumptionHistory.findFirst({
      where: {
        month_reference: MonthReferenceType[month],
        year,
      },
    });

    return data;
  }
}
