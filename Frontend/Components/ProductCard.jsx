import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <span className="category">{product.category}</span>

      <button
        className="add-to-cart"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
