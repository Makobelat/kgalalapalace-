import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initiatePayment } from '../../services/paygate';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
}

export default function PaymentForm({ amount, onSuccess }: PaymentFormProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);

    try {
      const reference = `ORDER-${Date.now()}`;
      const returnUrl = `${window.location.origin}/payment-success`;
      
      const response = await initiatePayment({
        amount,
        reference,
        email,
        returnUrl,
      });

      // Redirect to PayGate payment page
      window.location.href = response.paymentUrl;
    } catch (err) {
      setError('Payment initiation failed. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={processing}
        className="w-full py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}