import React from "react";
import "./CaseStudies.css";
import arrowIcon from "../assets/images/arrow2.png";

const CaseStudies = () => (
  <section className="case-studies-section">
    <div className="case-cards-container">
      <div className="case-card">
        <p>
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </p>
        <a href="#" className="learn-more">
          Learn more
          <img src={arrowIcon} alt="Arrow icon" className="icon-wrapper" />
        </a>
      </div>
      <div className="case-card">
        <p>
          For a B2B software company, we developed an SEO strategy that
          resulted in a first page ranking for key keywords and a 200% increase
          in organic traffic.
        </p>
        <a href="#" className="learn-more">
          Learn more
          <img src={arrowIcon} alt="Arrow icon" className="icon-wrapper" />
        </a>
      </div>
      <div className="case-card">
        <p>
          For a national retail chain, we created a social media marketing
          campaign that increased followers by 25% and generated a 20% increase
          in online sales.
        </p>
        <a href="#" className="learn-more">
          Learn more
          <img src={arrowIcon} alt="Arrow icon" className="icon-wrapper" />
        </a>
      </div>
    </div>
  </section>
);

export default CaseStudies;
