import React from "react";
import "./ServicesSection.css";
import iconArrowBlack from "../assets/images/arrow-icon-black.png";
import iconArrowWhite from "../assets/images/arrow-icon-white.png";
import seoImage from "../assets/images/seo.png";
import ppcImage from "../assets/images/ppc.png";
import socialMediaImage from "../assets/images/social-media.png";
import emailImage from "../assets/images/email.png";
import contentImage from "../assets/images/content.png";
import analyticsImage from "../assets/images/analytics.png";

const ServiceCard = ({ labelLines, bgColor, image }) => {
  const icon = bgColor === "#191A23" ? iconArrowWhite : iconArrowBlack;

  return (
    <div
      className="card-wrapper"
      style={{
        "--bg-color": bgColor,
        "--label-bg-color": bgColor === "#F3F3F3" ? "#b9ff66" : "#ffffff",
        "--text-color": bgColor === "#191A23" ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-content-container">
        <div className="content-wrapper">
          <div className="label-container">
            {labelLines.map((line, index) => (
              <div className="label-line" key={index}>
                {line}
              </div>
            ))}
          </div>
          <a href="#" className="learn-more">
            <img className="icon-wrapper" src={icon} alt="Arrow icon" />
            Learn more
          </a>
        </div>
        <img
          className="image-wrapper"
          src={image}
          alt={`${labelLines.join(" ")} illustration`}
        />
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <div className="card-grid">
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
  </div>
);

export default ServicesSection;
