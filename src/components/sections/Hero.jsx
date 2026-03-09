import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Käserei Seetal</h1>
        <p className="hero-subtitle">Traditionelles Handwerk. Moderner Genuss.</p>
        <div className="hero-actions">
          <a href="#about" className="btn btn-primary glass-panel">Entdecken</a>
          <a href="#shop" className="btn btn-secondary glass-panel">Zum Shop</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
