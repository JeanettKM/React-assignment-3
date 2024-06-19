import React, { useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container success-container">
      <h1 className="success-title">Order Successful!</h1>
      <p>Thank you for your support, hope to see you again</p>
      <Link to="/" className="button back-button">
        Back to Store
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
