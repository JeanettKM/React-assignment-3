import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="container checkout-container">
      <h1 className="success-title">Checkout</h1>
      <p className="checkout-description">Are you sure you got everything?</p>
      <div className="checkout-items">
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
          </div>
        ))}
      </div>
      <div className="total">Total: ${total.toFixed(2)}</div>
      <Link to="/checkout-success" className="button complete-button">
        Complete Checkout
      </Link>
    </div>
  );
};

export default Checkout;
