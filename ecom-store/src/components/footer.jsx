// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2023 ECom Store. All rights reserved.</p>
      <nav>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
    </FooterWrapper>
  );
};

export default Footer;
