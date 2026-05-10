import type { TicketOrder } from '../types/ticket';
import { tickets } from '../data/tickets';

export const calculateTotal = (order: Omit<TicketOrder, 'total'>): number => {
  return calculateTotalAmount(order);
};

export const calculateTotalTickets = (order: Omit<TicketOrder, 'total'>): number => {
  return order.adults + order.teens + order.children;
};

export const calculateTotalAmount = (order: Omit<TicketOrder, 'total'>): number => {
  return (
    order.adults * tickets.find(t => t.id === 'adult')!.price +
    order.teens * tickets.find(t => t.id === 'teen')!.price +
    order.children * tickets.find(t => t.id === 'child')!.price
  );
};