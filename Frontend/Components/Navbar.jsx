import { Link } from "react-router-dom";
import React from 'react';
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">EcoFinds</Link>
      <div>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </div>
    </nav>
  );
}
