import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import "../App.css"; // Import the CSS file

const ProductCardFrontPage = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const imageUrl = product.image ? product.image.url : "";

  return (
    <div className="card-container">
      <div className="card">
        <img className="image" src={imageUrl} alt={product.title} />
        <h1 className="title">{product.title}</h1>
        <p className="description">{product.description}</p>
        <div className="button-container">
          <Link
            to={`/product/${product.id}`}
            className="button view-product-button"
          >
            View Product
          </Link>
          <button
            className="button add-to-cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardFrontPage;
