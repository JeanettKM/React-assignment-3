// src/pages/frontPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/header";
import ProductCard from "../components/productCardFrontPage"; // Import the ProductCard component
import styled from "styled-components"; // Import styled-components
import footer from "../components/footer";

// Create a styled component for the content container
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

// Create a styled component for the product cards container
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%; // Set a specific width for the container to ensure it's centered
  margin: 0 auto; // Center the container
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
          console.error(
            "Expected an array of products, but received:",
            response.data.data
          );
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
        <Header /> {/* Include the Header component */}
      </header>
      <ContentContainer>
        <h1>Welcome to the ECom Store</h1>
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
