import downvip from '../assets/KPimages/downvip.jpg';
import outside2 from '../assets/KPimages/outside 2.jpg';
import outside1 from '../assets/KPimages/outside1.jpg';
import outsidePrivate from '../assets/KPimages/outside1 - Copy.jpg';
import smallLapa from '../assets/KPimages/small lapa.jpg';

export const venues = [
  {
    id: '1',
    name: 'Main Hall',
    description: 'An elegant space perfect for large conferences and formal events',
    capacity: 500,
    pricePerHour: 1000,
    imageUrl: downvip,
    amenities: ['Stage', 'Professional Sound System', 'LED Screens', 'Banquet Setup']
  },
  {
    id: '2',
    name: 'VIP area',
    description: 'Modern meeting space ideal for corporate gatherings',
    capacity: 50,
    pricePerHour: 200,
    imageUrl: downvip,
    amenities: ['Video Conferencing', 'Whiteboard', 'Coffee Service', 'High-speed WiFi']
  },
  {
    id: '3',
    name: 'Entertainment Hall',
    description: 'Versatile space for concerts, shows, and social events',
    capacity: 300,
    pricePerHour: 800,
    imageUrl: outside2,
    amenities: ['Stage', 'Dance Floor', 'Bar Setup', 'Lighting System']
  },
  {
    id: '4',
    name: 'Outside area',
    description: 'Versatile space for concerts, shows, and social events',
    capacity: 300,
    pricePerHour: 800,
    imageUrl: outside1,
    amenities: ['Stage', 'Dance Floor', 'Bar Setup', 'Lighting System']
  },
  {
    id: '5',
    name: 'Outside private event',
    description: 'Versatile space for small events, shows, and social events',
    capacity: 300,
    pricePerHour: 800,
    imageUrl: outsidePrivate,
    amenities: ['Stage', 'Dance Floor', 'Bar Setup', 'Lighting System']
  },
  {
    id: '6',
    name: 'Small Lapa',
    description: 'Versatile space for concerts, shows, and social events',
    capacity: 15,
    pricePerHour: 800,
    imageUrl: smallLapa,
    amenities: ['Stage', 'Dance Floor', 'Bar Setup', 'Lighting System']
  }
];
