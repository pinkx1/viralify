import React, { useState } from "react";
import "./Accordion.css";
import plusIcon from "../assets/images/plus.png";
import minusIcon from "../assets/images/minus.png";

const AccordionCard = ({ number, title, content, isOpen, onClick }) => (
  <div
    className={`accordion-card ${isOpen ? "open" : ""}`}
    onClick={onClick}
  >
    <div className="card-header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="card-number">{number}</div>
        <div className="card-title">{title}</div>
      </div>
      <img
        className="icon-wrapper"
        src={isOpen ? minusIcon : plusIcon}
        alt="Toggle icon"
      />
    </div>
    {isOpen && (
      <>
        <div className="divider" />
        <div className="card-content">{content}</div>
      </>
    )}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cardsData = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "We develop a detailed strategy based on research to address the specific needs of your business.",
    },
    {
      number: "03",
      title: "Implementation",
      content:
        "Implementing the agreed strategies to help achieve your business goals.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "Continuous monitoring and optimization of marketing efforts to maximize results.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content:
        "Regular reports and updates to keep you informed of the progress.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content:
        "Ongoing improvements to adapt to changes and ensure sustained success.",
    },
  ];

  return (
    <div className="accordion-container">
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
    </div>
  );
};

export default Accordion;
