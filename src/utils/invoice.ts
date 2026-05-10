import type { TicketOrder } from '../types/ticket';
import type { Invoice, InvoiceItem } from '../types/invoice';
import { tickets } from '../data/tickets';
import { format } from 'date-fns';

export function generateInvoice(order: TicketOrder): Invoice {
  const items: InvoiceItem[] = [];
  const currentDate = new Date();
  
  Object.entries(order).forEach(([type, quantity]) => {
    if (type === 'total' || quantity === 0) return;
    
    const ticket = tickets.find(t => t.id === type);
    if (ticket) {
      items.push({
        name: ticket.name,
        quantity,
        price: ticket.price,
        subtotal: ticket.price * quantity
      });
    }
  });

  return {
    id: `INV-${format(currentDate, 'yyyyMMdd')}-${Math.floor(Math.random() * 10000)}`,
    date: currentDate.toISOString(),
    items,
    total: items.reduce((sum, item) => sum + item.subtotal, 0)
  };
}