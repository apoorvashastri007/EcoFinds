import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import FloatingCart from "./Components/FloatingCart";

import Feed from "./pages/Feed";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import AddProduct from "./pages/AddProduct";
// import Dashboard from "./pages/Dashboard";
// import MyListings from "./pages/MyListings";
import ProductDetail from "./pages/ProductDetail";
// import Purchases from "./pages/Purchases";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <FloatingCart />
      <main style={{ flex: 1, padding: "1.5rem" }}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="/add-product" element={<AddProduct />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-listings" element={<MyListings />} />
          <Route path="/purchases" element={<Purchases />} />*/}
        </Routes> 
      </main>
      <Footer />
    </div>
  );
}
