import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard"; // Adjust the path as necessary

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    axios
      .get(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((response) => {
        console.log("API response:", response.data); // Temporarily log the response
        if (response.data && response.data.data) {
          setProduct(response.data.data); // Correctly access the product data
        } else {
          console.error("Product not found");
        }
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Also set loading to false in case of an error
      });
  }, [id]); // Depend on the 'id' to refetch if it changes

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div>
      <ProductCard product={product} /> {/* Use the ProductCard component */}
    </div>
  );
};

export default ProductDetails;
