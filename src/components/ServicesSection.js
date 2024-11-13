import React from 'react';
import styled from 'styled-components';
import iconArrow from '../assets/images/arrow-icon.png';
import seoImage from '../assets/images/seo.png';
import ppcImage from '../assets/images/ppc.png';
import socialMediaImage from '../assets/images/social-media.png';
import emailImage from '../assets/images/email.png';
import contentImage from '../assets/images/content.png';
import analyticsImage from '../assets/images/analytics.png';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    gap: 20px;
    width: 100%;
    height: 260px; /* Фиксированная высота для одинакового размера */
    background-color: ${({ bgColor }) => bgColor || '#F3F3F3'};
    border: 1px solid #191A23;
    box-shadow: 0px 5px 0px #191A23;
    border-radius: 45px;
    box-sizing: border-box;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Label = styled.div`
    background-color: #b9ff66;
    padding: 5px 10px;
    border-radius: 7px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #000;
    max-width: 200px;
`;

const LearnMore = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #000;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    text-decoration: none;
`;

const IconWrapper = styled.img`
    width: 20px;
    height: 20px;
`;

const ImageWrapper = styled.img`
  width: 200px;
  height: auto;
`;

const ServiceCard = ({ label, description, bgColor, image }) => (
    <CardWrapper bgColor={bgColor}>
        <ContentWrapper>
            <Label>{label}</Label>
            <LearnMore href="#">
                <IconWrapper src={iconArrow} alt="Arrow icon" />
                Learn more
            </LearnMore>
        </ContentWrapper>
        <ImageWrapper src={image} alt={`${label} illustration`} />
    </CardWrapper>
);

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px; /* Отступ между карточками */
    max-width: 1100px; /* Ограничиваем ширину сетки для соблюдения общего стиля */
    margin: 0 auto; /* Центрируем сетку */

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* На маленьких экранах одна карточка в ряд */
        padding: 0 20px; /* Отступы слева и справа */
    }
`;



const ServicesSection = () => (
    <CardGrid>
        <ServiceCard
            label="Search engine optimization"
            bgColor="#F3F3F3"
            image={seoImage}
        />
        <ServiceCard
            label="Pay-per-click advertising"
            bgColor="#B9FF66"
            image={ppcImage}
        />
        <ServiceCard
            label="Social Media Marketing"
            bgColor="#191A23"
            image={socialMediaImage}
        />
        <ServiceCard
            label="Email Marketing"
            bgColor="#F3F3F3"
            image={emailImage}
        />
        <ServiceCard
            label="Content Creation"
            bgColor="#B9FF66"
            image={contentImage}
        />
        <ServiceCard
            label="Analytics and Tracking"
            bgColor="#191A23"
            image={analyticsImage}
        />
    </CardGrid>
);

export default ServicesSection;
