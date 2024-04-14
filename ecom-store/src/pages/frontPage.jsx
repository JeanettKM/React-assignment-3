import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/header";
import ProductCard from "../components/productCardFrontPage";
import styled from "styled-components";
import footer from "../components/footer";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const FrontPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://v2.api.noroff.dev/online-shop")
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          console.error(response.data.data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>
        <Header />
      </header>
      <ContentContainer>
        <h1>ECom Store</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </ContentContainer>
    </div>
  );
};

export default FrontPage;
