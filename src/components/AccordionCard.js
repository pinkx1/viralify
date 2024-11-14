import React, { useState } from 'react';
import styled from 'styled-components';
import plusIcon from '../assets/images/plus.png';
import minusIcon from '../assets/images/minus.png';

const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

const Card = styled.div`
    background-color: ${({ isOpen }) => (isOpen ? '#B9FF66' : '#F3F3F3')};
    border: 1px solid #191A23;
    box-shadow: 0px 5px 0px #191A23;
    border-radius: 45px;
    padding: 41px 60px; 
    cursor: pointer;
    transition: background-color 0.3s ease;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Number = styled.div`
    width: 65px;
    height: 77px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 60px;
    line-height: 77px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

const Title = styled.div`
    width: 612px;
    height: 38px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #000000;
    margin-left: 25px; /* Изменено на 25px для отступа между цифрой и заголовком */
    flex: none;
    order: 1;
    flex-grow: 0;
`;

const IconWrapper = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain; /* Масштабирует иконку, сохраняя пропорции */
    background-color: transparent; /* Убедитесь, что фон прозрачный */
`;

const Divider = styled.div`
    height: 1px;
    background-color: #000;
    margin: 30px 0; /* Отступы сверху и снизу по 30px */
`;

const Content = styled.div`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    color: #000;
`;

const AccordionCard = ({ number, title, content, isOpen, onClick }) => (
    <Card isOpen={isOpen} onClick={onClick}>
        <CardHeader>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Number>{number}</Number>
                <Title>{title}</Title>
            </div>
            <IconWrapper src={isOpen ? minusIcon : plusIcon} alt="Toggle icon" />
        </CardHeader>
        {isOpen && (
            <>
                <Divider />
                <Content>{content}</Content>
            </>
        )}
    </Card>
);

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCard = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const cardsData = [
        {
            number: '01',
            title: 'Consultation',
            content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
        },
        {
            number: '02',
            title: 'Research and Strategy Development',
            content: 'We develop a detailed strategy based on research to address the specific needs of your business.'
        },
        {
            number: '03',
            title: 'Implementation',
            content: 'Implementing the agreed strategies to help achieve your business goals.'
        },
        {
            number: '04',
            title: 'Monitoring and Optimization',
            content: 'Continuous monitoring and optimization of marketing efforts to maximize results.'
        },
        {
            number: '05',
            title: 'Reporting and Communication',
            content: 'Regular reports and updates to keep you informed of the progress.'
        },
        {
            number: '06',
            title: 'Continual Improvement',
            content: 'Ongoing improvements to adapt to changes and ensure sustained success.'
        },
    ];

    return (
        <AccordionContainer>
            {cardsData.map((card, index) => (
                <AccordionCard
                    key={index}
                    number={card.number}
                    title={card.title}
                    content={card.content}
                    isOpen={openIndex === index}
                    onClick={() => toggleCard(index)}
                />
            ))}
        </AccordionContainer>
    );
};

export default Accordion;
