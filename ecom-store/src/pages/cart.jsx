import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

const Cart = () => {
  const { cart, total, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <h1 className="title">Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <Link to={`/product/${item.id}`}>
            <img
              className="cart-item-image"
              src={item.image.url}
              alt={item.title}
            />
          </Link>
          <div className="item-info">
            <Link to={`/product/${item.id}`} className="cart-item-title">
              {item.title}
            </Link>
            <span>
              ${item.discountedPrice} x {item.quantity}
            </span>
          </div>
          <button
            className="remove-button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="total">Total: ${total.toFixed(2)}</div>
      <Link to="/checkout" className="button checkout-button">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
