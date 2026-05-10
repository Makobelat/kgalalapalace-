import React from 'react';
import { format } from 'date-fns';
import type { Invoice } from '../../types/invoice';

interface TicketInvoiceDetailsProps {
  invoice: Invoice;
}

export default function TicketInvoiceDetails({ invoice }: TicketInvoiceDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold">Ticket Invoice</h2>
          <p className="text-gray-600">#{invoice.id}</p>
        </div>
        <div className="text-right">
          <p className="font-medium">Date</p>
          <p className="text-gray-600">{format(new Date(invoice.date), 'dd MMM yyyy')}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Item</th>
                <th className="pb-2 text-right">Quantity</th>
                <th className="pb-2 text-right">Price</th>
                <th className="pb-2 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2 text-right">{item.quantity}</td>
                  <td className="py-2 text-right">R{item.price}</td>
                  <td className="py-2 text-right">R{item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <div className="w-64">
            <div className="flex justify-between py-2 text-lg font-bold">
              <span>Total</span>
              <span>R{invoice.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}