import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../components/CartIcon";
import { CartContext } from "../components/CartContext";
import "../App.css";

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="title-link">
        <h1 className="title">SHOPit</h1>
      </Link>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/cart" className="nav-link">
          <CartIcon itemCount={cartItemCount} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
