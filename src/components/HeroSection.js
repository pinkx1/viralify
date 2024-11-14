import React from 'react';
import styled from 'styled-components';
import illustration from '../assets/images/illustration.png';
import amazonLogo from '../assets/images/amazon-logo.png';
import dribbbleLogo from '../assets/images/dribbble-logo.png';
import hubspotLogo from '../assets/images/hubspot-logo.png';
import notionLogo from '../assets/images/notion-logo.png';
import netflixLogo from '../assets/images/netflix-logo.png';
import zoomLogo from '../assets/images/zoom-logo.png';

const HeroWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
    margin: 70px auto 0 auto;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
    width: 531px;
`;

const Title = styled.h1`
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 60px;
    line-height: 77px;
    color: #000000;
    margin: 0;
    width: 531px;
`;

const Subtitle = styled.p`
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
    margin: 0;
    width: 498px;
`;

const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 35px;
    width: 264px;
    height: 68px;
    background: #191A23;
    border-radius: 14px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    text-decoration: none;
    text-align: center;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        background-color: #333333;
        transform: scale(1.05);
    }
`;

const ImageContainer = styled.div`
    max-width: 600px;
    width: 100%;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
    }
`;

const LogotypesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto 70px auto;
    gap: 20px;
    max-width: 1200px;

    img {
        max-height: 48px;
        width: auto;
        filter: grayscale(100%);
        transition: filter 0.3s ease;

        &:hover {
            filter: grayscale(0);
        }
    }
`;

const HeroSection = () => (
    <>
        <HeroWrapper>
            <TextContainer>
                <Title>Navigating the digital landscape for success</Title>
                <Subtitle>
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </Subtitle>
                <Button href="#contact">Book a consultation</Button>
            </TextContainer>
            <ImageContainer>
                <img src={illustration} alt="Digital Marketing Illustration" />
            </ImageContainer>
        </HeroWrapper>

        <LogotypesContainer>
            <img src={amazonLogo} alt="Amazon Logo" />
            <img src={dribbbleLogo} alt="Dribbble Logo" />
            <img src={hubspotLogo} alt="HubSpot Logo" />
            <img src={notionLogo} alt="Notion Logo" />
            <img src={netflixLogo} alt="Netflix Logo" />
            <img src={zoomLogo} alt="Zoom Logo" />
        </LogotypesContainer>
    </>
);

export default HeroSection;
