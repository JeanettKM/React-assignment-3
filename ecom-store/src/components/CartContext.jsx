import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // State to hold the items
  const [cart, setCart] = useState([]);

  // Function for adding a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart for updating the quantity
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If the products is already added, increase the total number of product by 1
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product isnt already added, then add the product to the cart with a quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    // Update the cart state
    setCart((prevCart) => {
      // Find the product in the cart by its id
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (!existingProduct) {
        return prevCart;
      }
      if (existingProduct.quantity === 1) {
        // If the product quantity is 1, remove the product from the cart
        return prevCart.filter((item) => item.id !== productId);
      } else {
        // If the product quantity is more than 1, decrease the quantity by 1
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  // Function to empty the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total price
  const total = cart.reduce(
    (sum, item) => sum + item.quantity * item.discountedPrice,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
