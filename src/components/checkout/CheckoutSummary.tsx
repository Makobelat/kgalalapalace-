import React from 'react';
import type { TicketOrder } from '../../types/ticket';
import { tickets } from '../../data/tickets';
import { calculateTotalAmount } from '../../utils/ticket';

interface CheckoutSummaryProps {
  order: TicketOrder;
}

export default function CheckoutSummary({ order }: CheckoutSummaryProps) {
  const getTicketDetails = (type: keyof Omit<TicketOrder, 'total'>) => {
    const ticket = tickets.find(t => t.id === type);
    const quantity = order[type];
    const subtotal = ticket ? ticket.price * quantity : 0;
    return { quantity, price: ticket?.price, subtotal };
  };

  const totalAmount = calculateTotalAmount(order);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        {Object.entries(order).map(([type, quantity]) => {
          if (type === 'total' || quantity === 0) return null;
          const details = getTicketDetails(type as keyof Omit<TicketOrder, 'total'>);
          
          return (
            <div key={type} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)} Ticket</p>
                <p className="text-sm text-gray-500">R{details.price} × {quantity}</p>
              </div>
              <p className="font-medium">R{details.subtotal}</p>
            </div>
          );
        })}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span>R{totalAmount}</span>
        </div>
      </div>
    </div>
  );
}