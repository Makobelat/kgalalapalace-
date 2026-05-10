import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import type { TicketOrder } from '../../types/ticket';
import { generateInvoice } from '../../utils/invoice';
import { useCart } from '../../context/CartContext';

interface OrderSummaryProps {
  order: TicketOrder;
}

export default function OrderSummary({ order }: OrderSummaryProps) {
  const navigate = useNavigate();
  const { updateOrder } = useCart();

  const handleProceed = () => {
    const invoice = generateInvoice(order);
    navigate('/invoice', { state: { invoice } });
  };

  return (
    <div className="mt-8 space-y-3">
      <button
        onClick={() => updateOrder({ adults: 0, teens: 0, children: 0, total: 0 })}
        className="w-full py-2 px-4 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
      >
        Reset
      </button>

      <button
        onClick={handleProceed}
        className="w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 bg-red-600 text-white hover:bg-red-700 transition-colors"
      >
        <ShoppingCart className="h-5 w-5" />
        <span>Proceed to Checkout</span>
      </button>
    </div>
  );
}