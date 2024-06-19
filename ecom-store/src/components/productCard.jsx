import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../components/CartContext";

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin: 20px 0;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const RemoveFromCartButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <ProductCardContainer>
      <ProductImage src={product.image.url} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ButtonContainer>
        <AddToCartButton onClick={() => addToCart(product)}>
          Add to Cart
        </AddToCartButton>
        <RemoveFromCartButton onClick={() => removeFromCart(product.id)}>
          Remove from Cart
        </RemoveFromCartButton>
      </ButtonContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
