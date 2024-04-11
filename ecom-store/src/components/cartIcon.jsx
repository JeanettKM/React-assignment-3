// src/components/CartIcon.jsx
import React from "react";
import styled from "styled-components";

const CartIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIcon = ({ itemCount }) => (
  <CartIconWrapper>
    <img src="/path/to/cart-icon.svg" alt="Cart" />
    {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
  </CartIconWrapper>
);

export default CartIcon;
