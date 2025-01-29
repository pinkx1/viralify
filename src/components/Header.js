import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Логотип */}
        <div className="navbar__logo-container">
          <div className="navbar__logo-icon" />
          <div className="navbar__logo-text">Viralify</div>
        </div>

        {/* Бургер-меню */}
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </div>

        {/* Меню */}
        <nav className={`navbar__menu ${menuOpen ? "open" : ""}`}>
          <Link className="navbar__menu-item" to="/about">About us</Link>
          <Link className="navbar__menu-item" to="/services">Services</Link>
          <Link className="navbar__menu-item" to="/use-cases">Use Cases</Link>
          <Link className="navbar__menu-item" to="/pricing">Pricing</Link>
          <Link className="navbar__menu-item" to="/blog">Blog</Link>
          <Link className="navbar__button" to="/quote">Request a quote</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
