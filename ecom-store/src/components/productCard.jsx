import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import "../App.css";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img
        src={product.image.url}
        alt={product.title}
        className="product-image"
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <div className="button-container">
        <button
          className="button add-to-cart-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className="button remove-from-cart-button"
          onClick={() => removeFromCart(product.id)}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
