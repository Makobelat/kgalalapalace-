import React, { useState } from 'react';
import musicConcert from '../assets/events/1.jpg';
import artExhibition from '../assets/events/2.jpg';
import foodFestival from '../assets/events/3.jpg';
import theaterPlay from '../assets/events/4.jpg';
import techConference from '../assets/events/5.jpg';
import comedyShow from '../assets/events/6.jpg';
import bookFair from '../assets/events/7.jpg';

const events = [
  {
    id: '1',
    name: 'All Black',
    description: 'Black Excellence music performances by renowned artists.',
    detailedDescription:
      'JAn exclusive all-black event celebrating elegance, culture, and the power of unity through music, fashion, and style.',
    date: 'March 22, 2025',
    imageUrl: comedyShow,
  },
  {
    id: '2',
    name: 'Soul & Kwaito',
    description: 'Soul & Kwaito Vibes: A Celebration of Sound and Culture.',
    detailedDescription:
      'DA high-energy Soul and Kwaito music event celebrating local talent, culture, and the timeless rhythm of the streets.',
    date: 'May 3, 2025',
    imageUrl: foodFestival,
  },
  {
    id: '3',
    name: 'Youth day',
    description: 'Ignite the Future: Youth Celebration Festival.',
    detailedDescription:
      'A vibrant Youth Day celebration showcasing young talent, entrepreneurship, and empowerment through music, art, and community dialogue.',
    date: 'June 16, 2025',
    imageUrl: theaterPlay,
  },
  {
    id: '4',
    name: 'Her Highness',
    description: 'Grace & Power: Women’s Day Celebration.',
    detailedDescription:
      'A heartfelt tribute to the strength, beauty, and achievements of women through inspiring talks, entertainment, and unity.',
    date: 'August 20, 2025',
    imageUrl: techConference,
  },
  {
    id: '5',
    name: 'All White soul session',
    description: 'Pure Vibes: All-White Soul Session.',
    detailedDescription:
      'An elegant all-white gathering blending smooth soul music, good energy, and unforgettable moments.',
    date: 'September 8, 2025',
    imageUrl: bookFair,
  },
  {
    id: '6',
    name: 'Jean and white',
    description: 'Denim & White Experience',
    detailedDescription:
      'A stylish fusion of music, fashion, and good vibes—come dressed in your best jeans and whites for a laid-back, unforgettable session.',
    date: 'November 10, 2025',
    imageUrl: musicConcert,
  },
  {
    id: '7',
    name: 'Family Fun day',
    description: 'Family Fun Day Fiesta.',
    detailedDescription:
      'A joyful day of games, food, and entertainment for the whole family to enjoy and connect in a festive atmosphere.',
    date: 'December 25, 2025',
    imageUrl: artExhibition,
  },
];

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<{
    id: string;
    name: string;
    description: string;
    detailedDescription: string;
    date: string;
    imageUrl: string;
  } | null>(null);

  const openModal = (event: typeof events[0]) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Events</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => openModal(event)}
          >
            <img
              src={event.imageUrl}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 p-6 sm:p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>
            <img
              src={selectedEvent.imageUrl}
              alt={selectedEvent.name}
              className="w-full object-contain rounded-lg mb-6"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{selectedEvent.name}</h2>
            <p className="text-gray-600 mb-4">
              <strong>Date:</strong> {selectedEvent.date}
            </p>
            <p className="text-gray-600 mb-6">{selectedEvent.detailedDescription}</p>
            <a
              href={`https://www.facebook.com//profile.php?id=100063455351444}`} // Replace with the actual Facebook event URL
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              View Event on Facebook
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPage;