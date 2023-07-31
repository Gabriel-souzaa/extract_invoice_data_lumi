export interface IInvoice {
  id?: number;
  number_client: string;
  month_reference: string;
  expiration_date: string;
  total_value: string;
  items_invoice?: IInvoiceItems[];
}

export interface IInvoiceItems {
  id?: number;
  name_item: string;
  measure_unit?: string;
  quantity?: string;
  price_unit?: string;
  total_value: string;
}
