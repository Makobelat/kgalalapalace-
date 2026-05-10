import type { TicketType } from '../../types/ticket';

interface TicketCardProps {
  ticket: TicketType;
  image?: string;
}

export default function TicketCard({ ticket, image }: TicketCardProps) {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      {image && (
        <img src={image} alt={ticket.name} className="w-64 h-48 object-cover rounded-md mr-4" />
      )}

      <div>
        <h3 className="text-lg font-semibold">{ticket.name}</h3>
        {ticket.description && <p className="text-gray-700">{ticket.description}</p>}
        <p className="text-gray-600">Age: {ticket.ageRange}</p>
        <p className="text-red-600 text-3xl font-extrabold">R{ticket.price}</p>
      </div>
    </div>
  );
}