import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="glass-footer">
      <div className="footer-content">
        <div className="footer-col brand-col">
          <Link to="/">
            <img src="logo.png" alt="Käserei Seetal" className="footer-logo" />
          </Link>
          <p>Tradition trifft auf Moderne im Herzen des Seetals.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Öffnungszeiten</h3>
          <ul>
            <li>Mo - Fr: 07:00 - 18:30</li>
            <li>Sa: 07:00 - 16:00</li>
            <li>So: Geschlossen</li>
          </ul>
        </div>
        
        <div className="footer-col newsletter">
          <h3>Newsletter</h3>
          <p>Bleibe auf dem Laufenden über unsere neuen Kreationen.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Deine E-Mail Adresse" required />
            <button type="submit">Abonnieren</button>
          </form>
        </div>

        <div className="footer-col map-col">
          <h3>Standort</h3>
          <div className="map-container glass-panel">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.832961816554!2d8.225574075355655!3d47.16542617115372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479013c7dbab0857%3A0xcac49fbfc4ec950a!2sK%C3%A4serei%20Seetal%20AG!5e0!3m2!1sde!2sch!4v1700000000000!5m2!1sde!2sch" 
               width="100%" height="150" style={{border:0, borderRadius: 'var(--border-radius-lg)'}} 
               allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Käserei Seetal. Alle Rechte vorbehalten.</p>
        <a href="#impressum">Impressum</a>
      </div>
    </footer>
  );
};

export default Footer;
