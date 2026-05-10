import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { BookingFormData } from '../../types/booking';

export default function InvoicePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.bookingData as BookingFormData;

  if (!bookingData) {
    navigate('/venues');
    return null;
  }

  // calculate total (use hours if provided, fallback to 1)
  const hours = bookingData.hours ?? 1;
  const pricePerHour = bookingData.pricePerHour ?? 0;
  const totalAmount = pricePerHour * hours;

  // send bookingData and total to venue checkout
  const handlePayment = () => {
    navigate('/venue-checkout', { state: { bookingData, total: totalAmount } });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Booking Invoice</h2>
            <p className="text-gray-600">#{`INV-${Date.now()}`}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">Date</p>
            <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="border-b pb-4">
            <h3 className="font-semibold mb-2">Venue Details</h3>
            <p className="text-gray-700">{bookingData.venueName}</p>
            <p className="text-gray-600">Booking Date: {new Date(bookingData.date).toLocaleDateString()}</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-semibold mb-2">Pricing</h3>
            <div className="flex justify-between">
              <span>Venue Rate (per hour)</span>
              <span>R{pricePerHour.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Hours Booked</span>
              <span>{hours}</span>
            </div>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span>R{totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}