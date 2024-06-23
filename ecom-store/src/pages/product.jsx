import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import "../App.css";

// Define the Product component
const Product = () => {
  // Get the product ID from the URL parameters
  const { id } = useParams();

  // Defining states for the product and loading status
  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    // Make a GET request to the API
    axios
      .get(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((response) => {
        console.log("API response:", response.data); // Log the API response for debugging
        setProduct(response.data.data); // Set the product state
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); // Log any error that occurs
        setLoading(false);
      });
  }, [id]);

  // Display a loading message while the product is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show an error message if applicable
  if (!product) {
    return <div>Could not find product, try again later</div>;
  }

  // Get the product image URL
  const imageUrl = product.image ? product.image.url : "";

  // Calculate the discount if the product is on sale
  const discount =
    product.price !== product.discountedPrice
      ? ((product.price - product.discountedPrice) / product.price) * 100
      : null;

  // Check if the product is already in the cart
  const isInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="product-container">
      <div className="product-card-container">
        <img className="product-image" src={imageUrl} alt={product.title} />

        <h2 className="product-title">{product.title}</h2>

        <p className="product-description">{product.description}</p>

        <p className="product-price">
          Price: ${product.discountedPrice}
          {discount && <span> (On sale: {discount.toFixed(2)}%)</span>}
        </p>

        <div className="button-container">
          <button
            className="button add-to-cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          {isInCart && (
            <button
              className="ProductButton button product-remove-from-cart-button"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from Cart
            </button>
          )}
        </div>

        {/* Display product reviews */}
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
            <p>No reviews on this yet, want to be the first one?</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
