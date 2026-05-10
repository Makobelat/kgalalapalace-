export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface Invoice {
  id: string;
  date: string;
  items: InvoiceItem[];
  total: number;
}