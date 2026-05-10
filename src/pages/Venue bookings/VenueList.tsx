import React from 'react';
import VenueCard from '../../components/VenueCard';
import { venues } from '../../data/venues';

export default function VenueList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Venues</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
}