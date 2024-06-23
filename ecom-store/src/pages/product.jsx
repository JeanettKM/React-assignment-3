import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import "../App.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((response) => {
        console.log("API response:", response.data); // Debugging line
        setProduct(response.data.data); // Access the product data inside the data object
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

  if (!product) {
    return <div>Product not found</div>;
  }

  const imageUrl = product.image ? product.image.url : "";
  const discount =
    product.price !== product.discountedPrice
      ? ((product.price - product.discountedPrice) / product.price) * 100
      : null;

  return (
    <div className="product-container">
      <div className="product-card-container">
        <img className="product-image" src={imageUrl} alt={product.title} />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">
          Price: ${product.discountedPrice}
          {discount && <span> (Discount: {discount.toFixed(2)}%)</span>}
        </p>
        <div className="button-container">
          <button
            className="button add-to-cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="ProductButton button product-remove-from-cart-button"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        </div>
        <h3>Reviews</h3>
        <div className="reviews">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <div key={review.id} className="review">
                <p>
                  <strong>{review.username}</strong>: {review.description}
                </p>
                <p>
                  <strong>Rating:</strong> {review.rating}
                </p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
