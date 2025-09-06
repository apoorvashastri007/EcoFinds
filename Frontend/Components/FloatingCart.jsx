import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import React from 'react';
export default function FloatingCart() {
  const { cartItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="floating-cart" style={{ position: "relative" }}>
      🛒
      {cartItems.length > 0 && (
        <span className="floating-cart-badge">{cartItems.length}</span>
      )}
    </Link>
  );
}
