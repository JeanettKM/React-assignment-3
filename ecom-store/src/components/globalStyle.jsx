// src/components/globalStyle.jsx
import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
 }

 h1, h2, h3, h4, h5, h6 {
    color: #333;
 }

 p {
    color: #666;
 }

 /* Add more global styles as needed */
`;

export default globalStyle;
