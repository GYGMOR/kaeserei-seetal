import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`glass-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="#home" className="logo-link">
          <img src="/logo.png" alt="Käserei Seetal" className="logo" />
        </a>
        <nav className="desktop-nav">
          <a href="#about">Über uns</a>
          <a href="#services">Dienstleistungen</a>
          <a href="#team">Team</a>
          <a href="#partners">Partner</a>
          <a href="#gallery">Galerie</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
