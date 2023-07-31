export interface IParsePdf {
  number_client: string;
  month_reference: string;
  expiration_date: string;
  value_total: string;
  items: IParsePdfItems[];
}

export interface IParsePdfItems { }
