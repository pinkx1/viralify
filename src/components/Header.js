import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Header = () => (
    <HeaderWrapper>
        <div>Viralify</div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </HeaderWrapper>
);

export default Header;
