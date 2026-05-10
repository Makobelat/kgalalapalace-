import React from 'react';
import { generateTimeSlots } from '../../utils/date';
import type { TimeSlot } from '../../types/booking';

interface TimeSlotPickerProps {
  selectedSlot: TimeSlot | null;
  onSlotSelect: (slot: TimeSlot) => void;
}

export default function TimeSlotPicker({ selectedSlot, onSlotSelect }: TimeSlotPickerProps) {
  const timeSlots = generateTimeSlots();

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Time Slot
      </label>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot) => (
          <button
            key={`${slot.startTime}-${slot.endTime}`}
            onClick={() => onSlotSelect(slot)}
            className={`p-2 text-sm rounded-md border ${
              selectedSlot?.startTime === slot.startTime
                ? 'bg-red-600 text-white border-red-600'
                : 'border-gray-300 hover:border-red-500'
            }`}
          >
            {slot.startTime} - {slot.endTime}
          </button>
        ))}
      </div>
    </div>
  );
}