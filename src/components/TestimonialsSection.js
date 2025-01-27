import React, { useState } from "react";
import styled from "styled-components";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    text: "Positivus has been a game-changer for our business. Their expertise and dedication have helped us achieve our goals in record time.",
    name: "Jane Doe",
    position: "CEO at ABC Inc.",
  },
  {
    text: "Working with Positivus was the best decision we made. Their innovative strategies and attention to detail exceeded our expectations.",
    name: "Michael Johnson",
    position: "Founder at TechStart",
  },
];

const SliderContainer = styled.div`
  background-color: #191A23;
  color: #ffffff;
  padding: 2rem 0;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translateX}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  border: 1px solid #B9FF66;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  background-color: #191A23;
  text-align: center;
`;

const Name = styled.p`
  color: #B9FF66;
  font-weight: bold;
  margin: 1rem 0 0.5rem;
`;

const Position = styled.p`
  color: #ffffff;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #B9FF66;
  }

  &:disabled {
    color: #555;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 1rem;
`;

const NextButton = styled(NavigationButton)`
  right: 1rem;
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const Indicator = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.active ? "#B9FF66" : "#ffffff")};
  cursor: pointer;

  &:hover {
    background-color: #B9FF66;
  }
`;

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
  const handleIndicatorClick = (index) => setCurrentIndex(index);

  return (
    <SliderContainer>
      <SliderWrapper translateX={-100 * currentIndex}>
        {testimonials.map((testimonial, index) => (
          <Slide key={index}>
            <TestimonialCard>
              <p>"{testimonial.text}"</p>
              <Name>{testimonial.name}</Name>
              <Position>{testimonial.position}</Position>
            </TestimonialCard>
          </Slide>
        ))}
      </SliderWrapper>
      <PrevButton onClick={handlePrev} disabled={currentIndex === 0}>
        ❮
      </PrevButton>
      <NextButton
        onClick={handleNext}
        disabled={currentIndex === testimonials.length - 1}
      >
        ❯
      </NextButton>
      <Indicators>
        {testimonials.map((_, index) => (
          <Indicator
            key={index}
            active={currentIndex === index}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </Indicators>
    </SliderContainer>
  );
};

export default TestimonialsSlider;
