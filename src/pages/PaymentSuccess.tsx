import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const { updateOrder } = useCart();

  useEffect(() => {
    // Clear the cart after successful payment
    updateOrder({
      adults: 0,
      teens: 0,
      children: 0,
      total: 0
    });
  }, [updateOrder]);

  return (
    <div className="max-w-lg mx-auto px-4 py-16 text-center">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your purchase. Your tickets have been confirmed.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
      >
        Return to Home
      </button>
    </div>
  );
}