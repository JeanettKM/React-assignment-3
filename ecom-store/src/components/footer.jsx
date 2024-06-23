import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2024 SHOPit.</p>
    </StyledFooter>
  );
};

export default Footer;
