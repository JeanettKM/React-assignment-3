import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import the Link component

const FrontPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://v2.api.noroff.dev/online-shop")
      .then((response) => {
        // Extract the 'data' property from the response
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

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Welcome to the ECom Store</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h2>
            <p>{product.description}</p>
            {/* Add more product details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontPage;
