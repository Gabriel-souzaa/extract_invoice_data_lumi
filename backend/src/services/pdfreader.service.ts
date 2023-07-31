import { Injectable } from '@nestjs/common';
import { PdfReader } from 'pdfreader';

@Injectable()
export class PdfReaderService {
  async handle(buffer: Buffer) {
    const parsePdf = await this.readPDFPages(buffer);

    const data = await this.parseToddPDF(parsePdf);

    return data;
  }

  async readPDFPages(buffer: Buffer) {
    const reader = new PdfReader();

    return new Promise((resolve, reject) => {
      const pages = [];
      reader.parseBuffer(buffer, (err, item) => {
        if (err) reject(err);
        else if (!item) resolve(pages);
        else if (item.page) pages.push({});
        else if (item.text) {
          const row = pages[pages.length - 1][item.y] || [];
          row.push(item.text);
          pages[pages.length - 1][item.y] = row;
        }
      });
    });
  }

  async parseToddPDF(pages) {
    const page = pages[0];

    const fields = {
      number_client: { row: '9.272', index: 0 },
      month_reference: { row: '3.9219999999999997', index: 0 },
      expiration_date: { row: '46.828', index: 2 },
      total_value: { row: '46.828', index: 3 },
      consumption_history: {},
      items_invoice: [
        {
          name_item: { row: '14.856', index: 0 },
          measure_unit: { row: '14.856', index: 1 },
          quantity: { row: '14.856', index: 2 },
          price_unit: { row: '14.856', index: 3 },
          total_value: { row: '14.856', index: 4 },
        },
        {
          name_item: { row: '15.456', index: 0 },
          measure_unit: { row: '15.456', index: 1 },
          quantity: { row: '15.456', index: 2 },
          price_unit: { row: '15.456', index: 3 },
          total_value: { row: '15.456', index: 4 },
        },
        {
          name_item: { row: '16.056', index: 0 },
          measure_unit: { row: '16.056', index: 1 },
          quantity: { row: '16.056', index: 2 },
          price_unit: { row: '16.056', index: 3 },
          total_value: { row: '16.056', index: 4 },
        },
        {
          name_item: { row: '16.656', index: 0 },
          total_value: { row: '16.656', index: 1 },
        },
      ],
    };

    const data: any = {};

    for (const key of Object.keys(fields)) {
      const field = fields[key];

      if (Array.isArray(field)) {
        const items = field.map((item) => {
          const dataItem = {};

          for (const keyItem of Object.keys(item)) {
            const fieldItem = item[keyItem];
            const valItem = page[fieldItem.row][fieldItem.index];
            dataItem[keyItem] = valItem.replace(/ /g, '');
          }

          return dataItem;
        });

        data[key] = items;
      } else {
        const val = page[field.row][field.index];
        data[key] = val;
      }
    }

    // Busca a sequência de caracteres depois do primeiro espaço.
    const regexFirstString = /(?<=\s)\S+/;

    data.number_client = data.number_client.match(regexFirstString)[0];
    data.month_reference = data.month_reference.match(regexFirstString)[0];
    data.expiration_date = data.expiration_date.replace(/ /g, '');
    data.total_value = data.total_value.replace(/ /g, '');

    return data;
  }
}
