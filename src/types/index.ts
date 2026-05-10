export interface Venue {
  id: string;
  name: string;
  description: string;
  capacity: number;
  pricePerHour: number;
  imageUrl: string;
  amenities: string[];
}

export interface BookingSlot {
  id: string;
  venueId: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
}