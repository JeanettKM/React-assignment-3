import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCardFrontPage";
import "../App.css"; // Import the CSS file

const FrontPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://v2.api.noroff.dev/online-shop")
      .then((response) => {
        // Ensure to access the correct data structure
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          console.error("Unexpected data structure:", response.data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header></header>
      <div className="content-container">
        <h1>Welcome to SHOPit, we got it all!</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="products-container">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
