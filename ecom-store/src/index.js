import React from "react";
import "bootswatch/dist/simplex/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
