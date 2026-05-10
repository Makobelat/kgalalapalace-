import { Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Venue } from '../types';

interface VenueCardProps {
  venue: Venue;
}

export default function VenueCard({ venue }: VenueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={venue.imageUrl} 
        alt={venue.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
        <p className="text-red-600 mb-4">{venue.description}</p>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-gray-700">
            <Users className="h-5 w-5 mr-1" />
            <span>Up to {venue.capacity}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="h-5 w-5 mr-1" />
            <span>R{venue.pricePerHour}/hour</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {venue.amenities.map((amenity) => (
            <span 
              key={amenity}
              className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>

        <Link 
          to={`/venues/${venue.id}`}
          className="block w-full text-center bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}