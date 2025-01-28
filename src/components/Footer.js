import React from "react";
import "./Footer.css";
import normalLinkedinLogo from "../assets/images/normalLinkedinLogo.png";
import normalFacebookLogo from "../assets/images/104498_facebook_icon.svg";
import normalTwitterLogo from "../assets/images/normalTwitterLogo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="navigation-and-contacts">
        <div className="nav-and-socials">
          <div className="logo">
            <span>Viralify</span>
          </div>
          <nav className="nav-links">
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
          </nav>
          <div className="social-icons">
            <div>
              <img src={normalLinkedinLogo} alt="LinkedIn" />
            </div>
            <div>
              <img src={normalFacebookLogo} alt="Facebook" />
            </div>
            <div>
              <img src={normalTwitterLogo} alt="Twitter" />
            </div>
          </div>
        </div>
        <div className="contacts-and-subscription">
          <div className="contacts">
            <h4>Contact us:</h4>
            <p>Email: info@viralify.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
          </div>
          <div className="subscription-block">
            <input type="email" placeholder="Email" />
            <button>Subscribe to news</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <div>
          <p>© 2023 Viralify. All Rights Reserved.</p>
          <a href="#privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
