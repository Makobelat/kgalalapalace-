import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from './DatePicker';
import type { BookingFormData } from '../../types/booking';
import type { Venue } from '../../types';

interface BookingFormProps {
  venue: Venue;
}

export default function BookingForm({ venue }: BookingFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    venueId: venue.id,
    venueName: venue.name,
    pricePerHour: venue.pricePerHour,
    hours: 1, // default hours
    totalAmount: venue.pricePerHour * 1,
    id: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // send bookingData and venue to InvoicePage
    navigate('/venue-invoice', {
      state: {
        bookingData: formData,
        venue,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <DatePicker
        selectedDate={formData.date}
        onDateChange={(date) => setFormData(prev => ({ ...prev, date }))}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Hours</label>
        <input
          type="number"
          min={1}
          value={formData.hours}
          onChange={(e) => setFormData(prev => ({ ...prev, hours: Number(e.target.value) }))}
          className="w-24 border rounded px-2 py-1"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => navigate('/venues')}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Continue to Payment
        </button>
      </div>
    </form>
  );
}