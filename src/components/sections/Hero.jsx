import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <video 
        className="hero-video" 
        src="video_header.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in-up">Käserei Seetal</h1>
        <p className="hero-subtitle animate-fade-in-up delay-1">Tradition & Leidenschaft im Reifekeller</p>
        <div className="hero-cta animate-fade-in-up delay-2">
          <a href="#shop" className="btn btn-primary glass-panel">Zum Shop</a>
          <a href="#about" className="btn btn-secondary glass-panel">Unsere Geschichte</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
