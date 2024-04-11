// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Define styled components for the ProductCard
const CardContainer = styled.div`
  width: calc(
    33.33% - 20px
  ); // Adjust the width to fit 3 cards in a row, accounting for margins
  margin: 10px; // Add some margin around each card for spacing
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  height: 400px; // Set a fixed height for the card
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Ensure content is spaced out
`;

const Image = styled.img`
  width: 100%;
  height: 200px; // Set a fixed height for the image
  object-fit: cover; // Ensure the image covers the area without stretching
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #666;
  overflow: hidden; // Hide overflowing text
  text-overflow: ellipsis; // Use ellipsis for overflowing text
  display: -webkit-box;
  -webkit-line-clamp: 3; // Limit to 3 lines
  -webkit-box-orient: vertical;
`;

const ViewProductButton = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard = ({ product }) => {
  // Assuming the product object has an image property that is an object with a url key
  // Adjust this line if the structure of your product object is different
  const imageUrl = product.image ? product.image.url : "";

  return (
    <CardContainer>
      <Card>
        <Image src={imageUrl} alt={product.title} />
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <ViewProductButton to={`/product/${product.id}`}>
          View product
        </ViewProductButton>
      </Card>
    </CardContainer>
  );
};

export default ProductCard;
