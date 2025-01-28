import React, { useState } from "react";
import "./TestimonialsSlider.css";

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

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
  const handleIndicatorClick = (index) => setCurrentIndex(index);

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(${-100 * currentIndex}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="slide" key={index}>
            <div className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="navigation-button prev-button"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        ❮
      </button>
      <button
        className="navigation-button next-button"
        onClick={handleNext}
        disabled={currentIndex === testimonials.length - 1}
      >
        ❯
      </button>
      <div className="indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
