import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, MapPin } from 'lucide-react';
import { venues } from '../data/venues';
import BookingForm from '../components/booking/BookingForm';
import type { BookingFormData } from '../types/booking';

export default function VenueDetail() {
  const { id } = useParams<{ id: string }>();
  const venue = venues.find(v => v.id === id);

  if (!venue) {
    return <div className="text-center py-12">Venue not found</div>;
  }

  const handleBooking = async (data: BookingFormData) => {
    // TODO: Implement booking logic and Stripe payment
    console.log('Booking data:', data);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={venue.imageUrl}
            alt={venue.name}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="mt-8">
            <h1 className="text-3xl font-bold mb-4">{venue.name}</h1>
            <p className="text-red-600 mb-6">{venue.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-red-700">
                <Users className="h-5 w-5 mr-2" />
                <span>Up to {venue.capacity} guests</span>
              </div>
              <div className="flex items-center text-red-700">
                <Clock className="h-5 w-5 mr-2" />
                <span>R{venue.pricePerHour}/hour</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-3">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {venue.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Book This Venue</h2>
          <BookingForm venue={venue} onSubmit={handleBooking} />
        </div>
      </div>
    </div>
  );
}