import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 140px; 
    margin-bottom: 80px; 
    text-align: left;
`;

const Title = styled.h2`
    font-size: 36px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    color: #000;
    background-color: #b9ff66;
    padding: 5px 10px;
    border-radius: 7px;
    margin: 0;
`;

const Description = styled.p`
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;
    color: #000000;
    margin: 0;
    max-width: 600px;
`;

const SectionHeader = ({ title, description }) => (
    <HeaderContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </HeaderContainer>
);

export default SectionHeader;
