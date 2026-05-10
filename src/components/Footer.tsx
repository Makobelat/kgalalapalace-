import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../data/logo wh.png';
import {Mail, Phone, MapPin } from 'lucide-react';
import Confetti from './Confetti';

export default function Footer() {
  const [confettiActive, setConfettiActive] = useState(false);

  const handleBookingSend = async (form: { name: string; email: string; date?: string; message?: string; type?: string }) => {
    try {
      const res = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error('Booking send failed', err);
        alert('Failed to send booking. Please try again later.');
        return;
      }

      // trigger confetti on success
      setConfettiActive(true);
      setTimeout(() => setConfettiActive(false), 3500);
      alert('Booking sent successfully. We will contact you soon.');
    } catch (e) {
      console.error(e);
      alert('Failed to send booking. Please try again later.');
    }
  };

  return (
    <footer className="bg-red-900 text-red-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Kgalala Palace" className="h-21 w-21 object-contain" />
              <span className="font-bold text-lg text-white">Kgalala Palace</span>
            </div>
            <p className="text-sm">
              Your premier destination for elegant events and memorable celebrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/venues" className="hover:text-red-500 transition-colors">Venues</Link>
              </li>
              <li>
                <Link to="/tickets" className="hover:text-red-500 transition-colors">Tickets</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-red-500 transition-colors">Events</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>063 093 5186</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@kgalalapalace.co.za</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>26 Lamontpark, Vanderbijlpark </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-white mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 10:00 - 18:00</li>
              <li>Saturday: 10:00 - 22:00</li>
              <li>Sunday: 10:00 - 18:00</li>
            </ul>
          </div>
        </div>
        {/* Booking form + Embedded Google Map + link */}
        <div className="mt-8 md:col-span-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-md">
              <h3 className="text-white font-semibold mb-3">Request a Booking</h3>
              <BookingForm onSend={handleBookingSend} />
              <p className="text-xs text-red-300 mt-3">Clicking "Send"</p>
            </div>

            <div>
              <div className="w-full h-64 rounded-md overflow-hidden">
                <iframe
                  title="Kgalala Palace Location"
                  src="https://maps.google.com/maps?q=26%20Lamontpark%20Vanderbijlpark&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <p className="mt-3 text-sm">
                <a
                  href="https://maps.app.goo.gl/9XREP8AEcWtDWzj26"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-300 hover:text-white"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-red-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Kgalala Palace. All rights reserved.</p>
          </div>
        </div>
        {confettiActive && <Confetti active={confettiActive} onComplete={() => setConfettiActive(false)} />}
      </div>
    </footer>
  );
}

function BookingForm({ onSend }: { onSend: (data: { name: string; email: string; date?: string; message?: string; type?: string }) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('Event');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend({ name, email, date, message, type });
    setName('');
    setEmail('');
    setDate('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md bg-white/10 placeholder:text-red-200"
        />
        <input
          required
          placeholder="Your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-md bg-white/10 placeholder:text-red-200"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col">
          <span className="text-xs text-red-200 mb-1">Event Date (optional)</span>
          <input
            type="date"
            placeholder="Event date (optional)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 rounded-md bg-white/10 placeholder:text-red-200"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-xs text-red-200 mb-1">Type</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 rounded-md bg-white/10"
          >
            <option>Event</option>
            <option>Corporate</option>
            <option>Day Stay</option>
          </select>
        </label>
      </div>

      <textarea
        placeholder="Message or requirements"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 rounded-md bg-white/10 placeholder:text-red-200"
        rows={4}
      />

      <div className="text-right">
        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Send Booking Request
        </button>
      </div>
    </form>
  );
}