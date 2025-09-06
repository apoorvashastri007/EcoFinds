import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const dummyProducts = [
  {
    id: 1,
    title: "Vintage Jacket",
    price: 1200,
    category: "Clothing",
    image: "https://via.placeholder.com/200x150?text=Jacket",
    description: "A stylish vintage jacket in excellent condition.",
  },
  {
    id: 2,
    title: "Wooden Chair",
    price: 800,
    category: "Furniture",
    image: "https://via.placeholder.com/200x150?text=Chair",
    description: "Classic wooden chair with a modern touch.",
  },
  {
    id: 3,
    title: "Smartphone",
    price: 5000,
    category: "Electronics",
    image: "https://via.placeholder.com/200x150?text=Phone",
    description: "Pre-owned smartphone in working condition.",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = dummyProducts.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", backgroundColor: "white", padding: 20, borderRadius: 8, boxShadow: "0 1px 6px rgba(0,0,0,0.1)" }}>
     <img
  src={product.image}
  alt={product.name}
  className="product-image"
  onError={e => (e.target.src = "https://via.placeholder.com/140x140?text=No+Image")}
/>

      <h1 style={{ marginTop: 16 }}>{product.title}</h1>
      <p style={{ color: "#16a34a", fontWeight: "bold", fontSize: 18 }}>₹{product.price}</p>
      <p>Category: {product.category}</p>
      <p style={{ marginTop: 16 }}>{product.description}</p>

      <button
        onClick={() => addToCart(product)}
        style={{ backgroundColor: "#16a34a", color: "white", padding: "0.5rem 1rem", marginTop: 20, border: "none", borderRadius: 8, cursor: "pointer" }}
      >
        Add to Cart
      </button>

      <div style={{ marginTop: 12 }}>
        <Link to="/" style={{ color: "#2563eb" }}>← Back to Products</Link>
      </div>
    </div>
  );
}
