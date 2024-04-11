// src/App.jsx
import React from "react";
import "./App.css"; // This line imports your global styles
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import CheckoutSuccess from "./pages/checkoutSuccess";
import Contact from "./pages/contact";
import { CartProvider } from "./components/CartContext"; // Import CartProvider
import Footer from "./components/footer"; // Import the Footer component

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/product/:id" element={<Product />} />{" "}
          {/* Route for individual product pages */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Include the Footer component here */}
      </Router>
    </CartProvider>
  );
}

export default App;
