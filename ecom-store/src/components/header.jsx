// src/components/Header.jsx
import React, { useContext } from "react";
import styled from "styled-components";
import CartIcon from "../components/cartIcon"; // Adjust the path as necessary
import { CartContext } from "../components/CartContext"; // Adjust the path to import CartContext correctly

const StyledHeader = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  const { cart } = useContext(CartContext); // Access cart from context
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Sum up the quantities of all items

  return (
    <StyledHeader>
      <h1>ECom Store</h1>
      <CartIcon itemCount={cartItemCount} />{" "}
      {/* Include the CartIcon component and pass the total item count */}
    </StyledHeader>
  );
};

export default Header;
