import React from 'react';
import styled from 'styled-components';
import illustrationImage from '../assets/images/IllustrationImage.png';

const CTASection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 394px;
    background-color: white;
    margin-top: 50px;
`;

const CTACard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 275px;
    width: 100%;
    max-width: 1240px;
    height: 347px;
    background: #F3F3F3;
    border-radius: 45px;
`;

const TextButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
    width: 500px;
    margin: auto 60px; /* 60px слева и справа, автоматические отступы сверху и снизу */
`;

const Title = styled.h3`
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #000000;
    margin: 0;
`;

const Description = styled.p`
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
    margin: 0;
`;

const CTAButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 35px;
    width: 288px;
    height: 68px;
    background: #191A23;
    border-radius: 14px;
    border: none;
    cursor: pointer;
`;

const ButtonLabel = styled.span`
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
`;

const IllustrationImage = styled.img`
    width: 494px;
    height: 394px;
`;

const CTASectionComponent = () => (
    <CTASection>
        <CTACard>
            <TextButtonContainer>
                <Title>Let’s make things happen</Title>
                <Description>
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </Description>
                <CTAButton>
                    <ButtonLabel>Get your free proposal</ButtonLabel>
                </CTAButton>
            </TextButtonContainer>
            <IllustrationImage src={illustrationImage} alt="Illustration" />
        </CTACard>
    </CTASection>
);

export default CTASectionComponent;
