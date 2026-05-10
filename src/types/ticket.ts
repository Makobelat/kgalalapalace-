export interface TicketType {
  id: string;
  name: string;
  price: number;
  ageRange: string;
  description: string;
}

export interface TicketOrder {
  adults: number;
  teens: number;
  children: number;
  total: number;
}