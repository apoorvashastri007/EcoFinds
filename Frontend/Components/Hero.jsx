import React from 'react';

export default function Hero() {
  return (
    <section className="hero improved-hero">
      <div className="hero-text">
        <h1>Eco-Friendly Products for a Better Planet</h1>
        <p>Shop sustainable products that make a difference.</p>
        <div className="hero-btns">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
      <img
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  alt="Eco Banner"
  className="hero-img"
/>
    </section>
  );
}
