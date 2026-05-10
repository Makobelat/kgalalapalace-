import { format, parse } from 'date-fns';
import type { TimeSlot } from '../types/booking';

export const formatDate = (date: string) => {
  return format(new Date(date), 'MMMM d, yyyy');
};

export const formatTime = (time: string) => {
  return format(parse(time, 'HH:mm', new Date()), 'h:mm a');
};

export const generateTimeSlots = (startHour = 9, endHour = 22): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  let currentHour = startHour;

  while (currentHour < endHour) {
    slots.push({
      startTime: `${currentHour}:00`,
      endTime: `${currentHour + 1}:00`
    });
    currentHour++;
  }

  return slots;
};