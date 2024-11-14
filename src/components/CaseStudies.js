import React from 'react';
import styled from 'styled-components';

const CaseStudiesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 100px;
    background-color: white;
`;

const CaseCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    max-width: 1240px;
    background-color: #191A23;
    border-radius: 45px;
    padding: 40px 60px;
    
`;

const CaseCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    color: #FFFFFF;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    position: relative;

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: #666666;
    }
`;

const LearnMore = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #B9FF66;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;

    &::after {
        content: "→";
        font-size: 20px;
    }
`;

const CaseStudies = () => (
    <CaseStudiesSection>
        <CaseCardsContainer>
            <CaseCard>
                <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                <LearnMore href="#">Learn more</LearnMore>
            </CaseCard>
            <CaseCard>
                <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                <LearnMore href="#">Learn more</LearnMore>
            </CaseCard>
            <CaseCard>
                <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                <LearnMore href="#">Learn more</LearnMore>
            </CaseCard>
        </CaseCardsContainer>
    </CaseStudiesSection>
);

export default CaseStudies;
