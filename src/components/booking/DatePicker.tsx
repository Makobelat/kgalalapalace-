import React from 'react';
import { format } from 'date-fns';

interface DatePickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export default function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  const minDate = format(new Date(), 'yyyy-MM-dd');
  const maxDate = format(new Date().setMonth(new Date().getMonth() + 3), 'yyyy-MM-dd');

  return (
    <div className="mb-6">
      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
        Select Date
      </label>
      <input
        type="date"
        id="date"
        min={minDate}
        max={maxDate}
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}