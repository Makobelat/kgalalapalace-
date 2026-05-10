import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import TicketSummary from '../components/tickets/TicketSummary';
import { tickets } from '../data/tickets';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const TicketInvoicePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { order } = useCart(); // fallback if navigate state isn't provided
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const invoiceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Try to read total passed via location.state first
    const stateTotal = (location.state as any)?.total;
    if (typeof stateTotal === 'number' && !isNaN(stateTotal)) {
      setTotalAmount(stateTotal);
      return;
    }

    // Fallback to total from cart/context if available
    if (order?.total && typeof order.total === 'number') {
      setTotalAmount(order.total);
      return;
    }

    // Last fallback: calculate from tickets + quantities in order
    const calc = tickets.reduce((sum, t) => {
      const qty = Number((order as any)[t.id] || 0);
      return sum + (t.price ?? 0) * qty;
    }, 0);
    setTotalAmount(calc);
  }, [location.state, order]);

  const handleProceedToCheckout = () => {
    navigate('/checkout', { state: { total: totalAmount } });
  };

  const handleDownloadPDF = async () => {
    if (!invoiceRef.current) return;
    try {
      // render invoice area to canvas
      const canvas = await html2canvas(invoiceRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');

      // create PDF and add image
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = (pdf as any).getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice-${Date.now()}.pdf`);
    } catch (err) {
      console.error('PDF generation failed', err);
      // fallback to window.print if needed
      window.print();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Ticket Invoice</h1>

      {/* Ticket summary copied here */}
      <div ref={invoiceRef} className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <TicketSummary order={order} />

        {/* Total only */}
        <div className="flex justify-between font-bold text-lg mt-6">
          <span>Total Amount</span>
          <span>ZAR {totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleProceedToCheckout}
          className="flex-1 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
          disabled={totalAmount === 0}
        >
          Proceed to Checkout
        </button>

        <button
          onClick={handleDownloadPDF}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          disabled={totalAmount === 0}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default TicketInvoicePage;