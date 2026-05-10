import { Link, useLocation } from 'react-router-dom';
import logo from '../data/logo.png';
import CartIcon from './cart/CartIcon';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-600' : 'text-gray-600 hover:text-red-600';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Kgalala Palace" className="h-21 w-21 object-contain" />
            <span className="font-bold text-xl"></span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`${isActive('/about')} font-medium transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/venues" 
              className={`${isActive('/venues')} font-medium transition-colors`}
            >
              Venues
            </Link>
            <Link 
              to="/tickets" 
              className={`${isActive('/tickets')} font-medium transition-colors`}
            >
              Tickets
            </Link>
            <Link 
              to="/events" 
              className={`${isActive('/events')} font-medium transition-colors`}
            >
              Events
            </Link>
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}