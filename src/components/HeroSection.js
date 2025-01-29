import React from "react";
import "./HeroSection.css";
import illustration from "../assets/images/illustration.png";
import amazonLogo from "../assets/images/amazon-logo.png";
import dribbbleLogo from "../assets/images/dribbble-logo.png";
import hubspotLogo from "../assets/images/hubspot-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import netflixLogo from "../assets/images/netflix-logo.png";
import zoomLogo from "../assets/images/zoom-logo.png";

const HeroSection = () => (
  <>
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Navigating the digital landscape for success</h1>
          <p className="hero__description">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <a href="#contact" className="hero__button">Book a consultation</a>
        </div>
        <div className="hero__illustration">
          <img src={illustration} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </section>

    <div className="hero__logos">
      <img src={amazonLogo} alt="Amazon Logo" />
      <img src={dribbbleLogo} alt="Dribbble Logo" />
      <img src={hubspotLogo} alt="HubSpot Logo" />
      <img src={notionLogo} alt="Notion Logo" />
      <img src={netflixLogo} alt="Netflix Logo" />
      <img src={zoomLogo} alt="Zoom Logo" />
    </div>
  </>
);

export default HeroSection;
