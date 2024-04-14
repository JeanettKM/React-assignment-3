import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: calc(33.33% - 20px);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
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
