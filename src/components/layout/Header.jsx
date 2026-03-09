import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="logo-link">
          <img src="logo.png" alt="Käserei Seetal" className="logo" />
        </Link>
        <nav className="desktop-nav">
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Über uns</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Dienstleistungen</Link>
          <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Team</Link>
          <Link to="/partners" className={location.pathname === '/partners' ? 'active' : ''}>Partner</Link>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Galerie</Link>
          <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Shop</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Kontakt</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
