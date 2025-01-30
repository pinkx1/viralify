import React from "react";
import "./HeroSection.css";
import illustration from "../assets/images/illustration.png";
import amazonLogo from "../assets/images/amazon-logo.png";
import dribbbleLogo from "../assets/images/dribbble-logo.png";
import hubspotLogo from "../assets/images/hubspot-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import netflixLogo from "../assets/images/netflix-logo.png";
import zoomLogo from "../assets/images/zoom-logo.png";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Контейнер, где будут: заголовок, описание, кнопка, картинка */}
      <div className="hero__container">
        {/* Заголовок */}
        <h1 className="hero__heading">
          Navigating the digital landscape for success
        </h1>

        {/* Описание */}
        <p className="hero__description">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        {/* Кнопка */}
        <a href="#contact" className="hero__button">
          Book a consultation
        </a>

        {/* Картинка */}
        <div className="hero__image">
          <img src={illustration} alt="Digital Marketing Illustration" />
        </div>
      </div>

      {/* Список логотипов */}
      <ul className="hero__logos">
        <li><img src={amazonLogo} alt="Amazon Logo" /></li>
        <li><img src={dribbbleLogo} alt="Dribbble Logo" /></li>
        <li><img src={hubspotLogo} alt="HubSpot Logo" /></li>
        <li><img src={notionLogo} alt="Notion Logo" /></li>
        <li><img src={netflixLogo} alt="Netflix Logo" /></li>
        <li><img src={zoomLogo} alt="Zoom Logo" /></li>
      </ul>
    </section>
  );
};

export default HeroSection;
