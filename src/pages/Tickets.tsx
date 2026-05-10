import { Ticket } from 'lucide-react';
import { tickets } from '../data/tickets';
import TicketCard from '../components/tickets/TicketCard';
import ev1 from '../assets/KPimages/adults.jpg';
import ev2 from '../assets/KPimages/teens.jpg';
import ev3 from '../assets/KPimages/kids .jpg';

export default function Tickets() {
  const imageMap: Record<string, string> = {
    adult: ev1,
    teen: ev2,
    child: ev3,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-8">
          <Ticket className="h-8 w-8 text-red-600 mr-3" />
          <h1 className="text-3xl font-bold">Tickets</h1>
        </div>

        <div className="space-y-6">
          {/* Display all tickets with an image beside each */}
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} image={imageMap[ticket.id]} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => alert('Booking not implemented')}
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
