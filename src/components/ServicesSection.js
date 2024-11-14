import React from 'react';
import styled from 'styled-components';
import iconArrowBlack from '../assets/images/arrow-icon-black.png';
import iconArrowWhite from '../assets/images/arrow-icon-white.png';
import seoImage from '../assets/images/seo.png';
import ppcImage from '../assets/images/ppc.png';
import socialMediaImage from '../assets/images/social-media.png';
import emailImage from '../assets/images/email.png';
import contentImage from '../assets/images/content.png';
import analyticsImage from '../assets/images/analytics.png';
import SectionHeader from './SectionHeader';


const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 260px;
    background-color: ${({ bgColor }) => bgColor || '#F3F3F3'};
    border: 1px solid #191A23;
    box-shadow: 0px 5px 0px #191A23;
    border-radius: 45px;
    box-sizing: border-box;
`;

const CardContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
`;

const LabelLine = styled.div`
    background-color: ${({ bgColor }) =>
            bgColor === '#F3F3F3' ? '#b9ff66' : '#FFFFFF'};
    padding: 5px 10px;
    border-radius: 7px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #000;
`;

const LearnMore = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ bgColor }) =>
            bgColor === '#191A23' ? '#FFFFFF' : '#000000'};
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    text-decoration: none;
`;

const IconWrapper = styled.img`
    width: 41px;
    height: 41px;
`;

const ImageWrapper = styled.img`
    width: 200px;
    height: auto;
`;

const ServiceCard = ({ labelLines, bgColor, image }) => {
    const icon = bgColor === '#191A23' ? iconArrowWhite : iconArrowBlack;

    return (
        <CardWrapper bgColor={bgColor}>
            <CardContentContainer>
                <ContentWrapper>
                    <LabelContainer>
                        {labelLines.map((line, index) => (
                            <LabelLine key={index} bgColor={bgColor}>
                                {line}
                            </LabelLine>
                        ))}
                    </LabelContainer>
                    <LearnMore href="#" bgColor={bgColor}>
                        <IconWrapper src={icon} alt="Arrow icon" />
                        Learn more
                    </LearnMore>
                </ContentWrapper>
                <ImageWrapper src={image} alt={`${labelLines.join(' ')} illustration`} />
            </CardContentContainer>
        </CardWrapper>
    );
};

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ServicesSection = () => (
    <>
        <SectionHeader
            title="Services"
            description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <CardGrid>
            <ServiceCard
                labelLines={["Search engine", "optimization"]}
                bgColor="#F3F3F3"
                image={seoImage}
            />
            <ServiceCard
                labelLines={["Pay-per-click", "advertising"]}
                bgColor="#B9FF66"
                image={ppcImage}
            />
            <ServiceCard
                labelLines={["Social Media", "Marketing"]}
                bgColor="#191A23"
                image={socialMediaImage}
            />
            <ServiceCard
                labelLines={["Email", "Marketing"]}
                bgColor="#F3F3F3"
                image={emailImage}
            />
            <ServiceCard
                labelLines={["Content", "Creation"]}
                bgColor="#B9FF66"
                image={contentImage}
            />
            <ServiceCard
                labelLines={["Analytics and", "Tracking"]}
                bgColor="#191A23"
                image={analyticsImage}
            />
        </CardGrid>
    </>
);

export default ServicesSection;
