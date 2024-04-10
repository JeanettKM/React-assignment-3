// src/components/footer.jsx
import React from "react";
import styled from "styled-components";

const styledFooter = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const footer = () => {
  return (
    <styledFooter>
      <p>© 2023 ECom Store</p>
    </styledFooter>
  );
};

export default footer;
