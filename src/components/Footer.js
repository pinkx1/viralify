import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Footer = () => (
    <FooterWrapper>
        <p>&copy; 2023 Viralify. All Rights Reserved.</p>
    </FooterWrapper>
);

export default Footer;
