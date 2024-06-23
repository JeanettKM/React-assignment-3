import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCardFrontPage";
import "../App.css";

const FrontPage = () => {
  // State to store the products fetched from the API and searchbar input
  const [products, setProducts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://v2.api.noroff.dev/online-shop") // GET request to the API
      .then((response) => {
        // Check if the response data is an array and set it to products state
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          // Log an error if needed
          console.error("Unexpected data structure:", response.data);
        }
      })
      .catch((error) => console.error(error)); // Log any error that may occur
  }, []);

  // Filter products based on the search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header></header>
      <div className="content-container">
        <h1>Welcome to SHOPit, we got it all</h1>

        {/* Search input to filter products */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm} // Controlled input value
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          className="search-bar"
        />

        {/* Display the filtered products */}
        <div className="products-container">
          {filteredProducts.map((product) => (
            // Render a ProductCard for each product in the filtered list
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
