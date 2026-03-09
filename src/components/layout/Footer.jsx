import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Top wave accent */}
      <div className="footer-accent-bar" />

      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/">
            <img src="logo.png" alt="Käserei Seetal" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            Handwerkliche Käsekunst seit 1985 –<br />
            im Herzen des Seetals.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">
              <Facebook size={18} />
            </a>
            <a href="mailto:info@kaeserei-seetal.ch" aria-label="E-Mail" className="social-icon">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/about">Über uns</Link></li>
            <li><Link to="/services">Dienstleistungen</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/gallery">Galerie</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Öffnungszeiten</h4>
          <ul className="hours-list">
            <li><span>Mo – Fr</span><span>07:00 – 18:30</span></li>
            <li><span>Samstag</span><span>07:00 – 16:00</span></li>
            <li><span>Sonntag</span><span>Geschlossen</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Kontakt</h4>
          <ul className="contact-list">
            <li><MapPin size={14} /> Käsereistrasse 1, 5732 Zetzwil</li>
            <li><Phone size={14} /> +41 62 123 45 67</li>
            <li><Mail size={14} /> info@kaeserei-seetal.ch</li>
          </ul>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.832961816554!2d8.225574075355655!3d47.16542617115372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479013c7dbab0857%3A0xcac49fbfc4ec950a!2sK%C3%A4serei%20Seetal%20AG!5e0!3m2!1sde!2sch!4v1700000000000!5m2!1sde!2sch"
              width="100%" height="130"
              style={{ border: 0, borderRadius: '12px', opacity: 0.8 }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Käserei Seetal"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Käserei Seetal AG · Alle Rechte vorbehalten</p>
        <div className="footer-bottom-links">
          <Link to="/impressum">Impressum</Link>
          <span>·</span>
          <a href="#">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
