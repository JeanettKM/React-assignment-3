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
      <p>All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
