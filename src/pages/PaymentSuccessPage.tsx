import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CheckoutPage from '../pages/CheckoutPage';

const PaymentSuccessPage = () => {
  return (
    <div className="max-w-lg mx-auto px-4 py-12 text-center">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="text-gray-700 mb-6">Thank you for your payment. Your transaction was successful.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;