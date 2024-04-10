// src/components/header.jsx
import React from "react";
import styled from "styled-components";

const styledHeader = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const header = () => {
  return (
    <styledHeader>
      <h1>ECom Store</h1>
    </styledHeader>
  );
};

export default header;
