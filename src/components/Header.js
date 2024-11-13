import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    height: 68px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const LogoIcon = styled.div`
    width: 20px;
    height: 20px;
    background-color: #000;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const LogoText = styled.div`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
`;

const NavAndButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const NavLinksContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        gap: 15px;
    }
`;

const NavLink = styled(Link)`
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const QuoteButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  width: 160px;
  height: 48px;
  border: 1px solid #191A23;
  border-radius: 14px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #191A23;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 130px;
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const Header = () => (
    <HeaderWrapper>
        <HeaderContainer>
            <LogoContainer>
                <LogoIcon />
                <LogoText>Viralify</LogoText>
            </LogoContainer>
            <NavAndButtonContainer>
                <NavLinksContainer>
                    <NavLink to="/about">About us</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/use-cases">Use Cases</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </NavLinksContainer>
                <QuoteButton to="/quote">Request a quote</QuoteButton>
            </NavAndButtonContainer>
        </HeaderContainer>
    </HeaderWrapper>
);

export default Header;
