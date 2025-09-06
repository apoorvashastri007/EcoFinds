import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total:</h2>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
}
