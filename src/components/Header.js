import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header-wrapper">
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-icon" />
        <div className="logo-text">Viralify</div>
      </div>
      <div className="nav-and-button-container">
        <nav className="nav-links-container">
          <Link className="nav-link" to="/about">About us</Link>
          <Link className="nav-link" to="/services">Services</Link>
          <Link className="nav-link" to="/use-cases">Use Cases</Link>
          <Link className="nav-link" to="/pricing">Pricing</Link>
          <Link className="nav-link" to="/blog">Blog</Link>
        </nav>
        <Link className="quote-button" to="/quote">Request a quote</Link>
      </div>
    </div>
  </header>
);

export default Header;
