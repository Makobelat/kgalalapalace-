import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FacebookWidget from './components/FacebookWidget';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import About from './pages/About';
import VenueList from './pages/Venue bookings/VenueList';
import VenueDetail from './pages/Venue bookings/VenueDetail';
import Tickets from './pages/Tickets';
import TicketInvoicePage from './pages/TicketInvoicePage';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';
import EventPage from './pages/Events';
import VenueInvoicePage from './pages/Venue bookings/venueInvoicePage';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/venues" element={<VenueList />} />
              <Route path="/venues/:id" element={<VenueDetail />} />
              <Route path="/invoice" element={<TicketInvoicePage />} />
              <Route path="/venue-invoice" element={<VenueInvoicePage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
          </main>
          <FacebookWidget />
          <WhatsAppWidget />
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}