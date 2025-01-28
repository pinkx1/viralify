import React from "react";
import "./CTASection.css";
import illustrationImage from "../assets/images/IllustrationImage.png";

const CTASectionComponent = () => (
  <section className="cta-section">
    <div className="cta-card">
      <div className="text-button-container">
        <h3 className="title">Let’s make things happen</h3>
        <p className="description">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="cta-button">
          <span className="cta-button-label">Get your free proposal</span>
        </button>
      </div>
      <img
        className="illustration-image"
        src={illustrationImage}
        alt="Illustration"
      />
    </div>
  </section>
);

export default CTASectionComponent;
