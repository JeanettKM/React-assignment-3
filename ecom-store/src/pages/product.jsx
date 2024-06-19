import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((response) => {
        console.log("API response:", response.data);
        if (response.data && response.data.data) {
          setProduct(response.data.data);
        } else {
          console.error("Product not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header></header>
      <ContentContainer>
        <ProductCard product={product} />
      </ContentContainer>
    </div>
  );
};

export default ProductDetails;
