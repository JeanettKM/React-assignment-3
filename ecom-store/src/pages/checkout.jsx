import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

const Checkout = () => {
  const { total } = useContext(CartContext);

  return (
    <div className="container">
      <h1 className="title">Checkout</h1>
      <h2 className="total">Total: ${total.toFixed(2)}</h2>
      <Link to="/checkout-success" className="button complete-button">
        Complete Checkout
      </Link>
    </div>
  );
};

export default Checkout;
