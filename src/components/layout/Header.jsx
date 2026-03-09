import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  const navLinks = [
    { to: '/about', label: 'Über uns' },
    { to: '/services', label: 'Dienstleistungen' },
    { to: '/team', label: 'Team' },
    { to: '/gallery', label: 'Galerie' },
    { to: '/shop', label: 'Shop' },
    { to: '/contact', label: 'Kontakt' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img src="logo.png" alt="Käserei Seetal" className="header-logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/shop" className="nav-cta">Shop besuchen</Link>
        </nav>

        {/* Mobile toggle */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(o => !o)} aria-label="Menü">
          {mobileOpen ? <X size={22} color="#fff" /> : <Menu size={22} color="#fff" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="mobile-nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`mobile-nav-link ${location.pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
