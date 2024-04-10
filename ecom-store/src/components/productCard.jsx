import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductCard;
