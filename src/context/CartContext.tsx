import React, { createContext, useContext, useState } from 'react';
import type { TicketOrder } from '../types/ticket';

interface CartContextType {
  order: TicketOrder;
  updateOrder: (order: TicketOrder) => void;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [order, setOrder] = useState<TicketOrder>({
    adults: 0,
    teens: 0,
    children: 0,
    total: 0
  });

  const updateOrder = (newOrder: TicketOrder) => {
    setOrder(newOrder);
  };

  const getTotalItems = () => {
    return order.adults + order.teens + order.children;
  };

  return (
    <CartContext.Provider value={{ order, updateOrder, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}