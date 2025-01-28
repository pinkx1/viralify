import React from "react";
import "./Footer.css";
import linkedinIcon from "../assets/images/normalLinkedinLogo.png";
import facebookIcon from "../assets/images/normalFacebookLogo.png";
import twitterIcon from "../assets/images/normalTwitterLogo.png";

const Footer = () => {
  return (
    <footer className="footer-viralify">
      <div className="footer-top-viralify">
        <div className="footer-logo-section-viralify">
          <span className="footer-logo-text-viralify">Viralify</span>
        </div>
        <nav className="footer-nav-viralify">
          <a href="#about" className="footer-link-viralify">About us</a>
          <a href="#services" className="footer-link-viralify">Services</a>
          <a href="#use-cases" className="footer-link-viralify">Use Cases</a>
          <a href="#pricing" className="footer-link-viralify">Pricing</a>
          <a href="#blog" className="footer-link-viralify">Blog</a>
        </nav>
      </div>

      <div className="footer-middle-viralify">
        <div className="footer-contact-viralify">
          <h4>Contact us:</h4>
          <p>Email: info@viralify.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
        </div>
        <div className="footer-subscription-viralify">
          <input
            type="email"
            className="footer-input-viralify"
            placeholder="Email"
          />
          <button className="footer-button-viralify">Subscribe to news</button>
        </div>
      </div>

      <div className="footer-bottom-viralify">
        <div className="footer-social-viralify">
          <img src={linkedinIcon} alt="LinkedIn" />
          <img src={facebookIcon} alt="Facebook" />
          <img src={twitterIcon} alt="Twitter" />
        </div>
        <div className="footer-legal-viralify">
          <p>© 2023 Viralify. All Rights Reserved.</p>
          <a href="#privacy-policy" className="footer-policy-link-viralify">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
