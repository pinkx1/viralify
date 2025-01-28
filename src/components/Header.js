import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo-icon" />
          <div className="logo-text">Viralify</div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <nav className={`nav-links-container ${menuOpen ? "open" : ""}`}>
          <Link className="nav-link" to="/about">About us</Link>
          <Link className="nav-link" to="/services">Services</Link>
          <Link className="nav-link" to="/use-cases">Use Cases</Link>
          <Link className="nav-link" to="/pricing">Pricing</Link>
          <Link className="nav-link" to="/blog">Blog</Link>
          <Link className="quote-button" to="/quote">Request a quote</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
