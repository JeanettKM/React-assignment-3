// src/pages/frontPage.js

import React, { useState, useEffect } from "react";
import mockProducts from "../mocks/products"; // Adjust the path as necessary

const FrontPage = () => {
  const [products, setProducts] = useState(mockProducts);

  return (
    <div>
      <h1>Welcome to the ECom Store</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {/* Add more product details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontPage;
