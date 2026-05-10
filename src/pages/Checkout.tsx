import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { initiatePayment } from '../services/paygate';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const stateTotal = (location.state as any)?.total;

  const [formData, setFormData] = useState({
    amount: '',
    reference: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // If total was passed via navigate(..., { state: { total } }), prefill amount
  useEffect(() => {
    if (typeof stateTotal === 'number' && !isNaN(stateTotal)) {
      setFormData((f) => ({ ...f, amount: stateTotal.toString() }));
    }
  }, [stateTotal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const paymentResponse = await initiatePayment({
        amount: parseFloat(formData.amount),
        reference: formData.reference,
        email: formData.email,
        returnUrl: `${window.location.origin}/payment-success`,
      });

      // Redirect to PayGate payment page
      window.location.href = paymentResponse.redirectUrl;
    } catch (err) {
      console.error(err);
      setError('Payment initiation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-m font-medium text-gray-700">
            Amount (ZAR)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            required
            readOnly={typeof stateTotal === 'number'}
          />
        </div>
        <div>
          <label htmlFor="reference" className="block text-m font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="reference"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-m font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;