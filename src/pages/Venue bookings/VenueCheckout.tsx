import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { initiatePayment } from '../../services/paygate';
import type { BookingFormData } from '../../types/booking';

export default function VenueCheckout() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = (location.state as any)?.bookingData as BookingFormData | undefined;
  const stateTotal = (location.state as any)?.total as number | undefined;

  const [formData, setFormData] = useState({
    amount: '',
    reference: bookingData ? `BK-${Date.now()}` : '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof stateTotal === 'number' && !isNaN(stateTotal)) {
      setFormData((f) => ({ ...f, amount: stateTotal.toString() }));
    } else if (bookingData && bookingData.pricePerHour && bookingData.hours) {
      const total = bookingData.pricePerHour * bookingData.hours;
      setFormData((f) => ({ ...f, amount: total.toString() }));
    }
  }, [stateTotal, bookingData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const payload: any = {
        amount: parseFloat(formData.amount),
        reference: formData.reference,
        email: formData.email,
        returnUrl: `${window.location.origin}/payment-success`,
        metadata: { bookingId: bookingData?.id },
      };
      const resp = await initiatePayment(payload);
      window.location.href = resp.redirectUrl;
    } catch (err) {
      console.error(err);
      setError('Payment failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Venue Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Amount (ZAR)</label>
          <input
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
            readOnly
            className="w-full"
          />
        </div>
        <div>
          <label>Reference</label>
          <input name="reference" value={formData.reference} onChange={handleChange} className="w-full" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full" required />
        </div>

        {error && <p className="text-red-600">{error}</p>}
        <button disabled={loading} className="w-full bg-red-600 text-white py-2 rounded">
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
}