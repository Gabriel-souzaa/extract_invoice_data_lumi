export interface IInvoice {
  id?: number;
  number_client: string;
  consumption_history?: IConsumptionHistory[];
  invoice_history?: InvoiceHistory[];
}

export interface IInvoiceItems {
  id?: number;
  invoice_id: number;
  name_item: string;
  measure_unit?: string;
  quantity?: string;
  price_unit?: string;
  total_value: string;
}

export interface InvoiceHistory {
  id?: number;
  invoice_id: number;
  nf: string;
  month_reference: string;
  year: string;
  expiration_date: string;
  total_value: string;
  items_invoice?: IInvoiceItems[];
}

export interface IConsumptionHistory {
  id?: number;
  invoice_id: number;
  month_reference: string;
  year: string;
  consumption: string;
  average: string;
  days: string;
}