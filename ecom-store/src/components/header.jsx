import React, { useContext } from "react";
import styled from "styled-components";
import CartIcon from "../components/cartIcon";
import { CartContext } from "../components/CartContext";

const StyledHeader = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <StyledHeader>
      <h1>ECom Store</h1>
      <CartIcon itemCount={cartItemCount} />{" "}
    </StyledHeader>
  );
};

export default Header;
