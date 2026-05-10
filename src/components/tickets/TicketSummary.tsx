import React from 'react';
import type { TicketOrder } from '../../types/ticket';
import { tickets } from '../../data/tickets';

interface TicketSummaryProps {
  order: TicketOrder;
}

export default function TicketSummary({ order }: TicketSummaryProps) {
  const getSubtotal = (type: keyof Omit<TicketOrder, 'total'>) => {
    const ticket = tickets.find(t => t.id === type);
    return ticket ? ticket.price * order[type] : 0;
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3 text-gray-700">
        {Object.entries(order).map(([type, quantity]) => {
          if (type === 'total') return null;
          if (quantity === 0) return null;
          
          const subtotal = getSubtotal(type as keyof Omit<TicketOrder, 'total'>);
          return (
            <div key={type} className="flex justify-between">
              <span>{quantity}x {type} tickets</span>
              <span>R{subtotal}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}