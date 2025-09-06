import { createContext, useState, useContext } from "react";
import React from 'react';
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => setCartItems(prev => [...prev, product]);
  const removeFromCart = (index) => setCartItems(prev => prev.filter((_, i) => i !== index));

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

