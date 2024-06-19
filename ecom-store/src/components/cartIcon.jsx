import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
  color: #333;
`;

const ItemCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 0.8em;
`;

const CartIcon = ({ itemCount }) => {
  return (
    <CartIconWrapper>
      <Icon icon={faShoppingCart} />
      {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
    </CartIconWrapper>
  );
};

export default CartIcon;
