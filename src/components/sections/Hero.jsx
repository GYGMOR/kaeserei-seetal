import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span>★</span>
          <span>Seit 1985 · Handwerk aus dem Seetal</span>
        </div>
        <h1 className="hero-title">
          Käserei<br /><span>Seetal</span>
        </h1>
        <p className="hero-subtitle">
          Tradition trifft auf moderne Perfektion – erleben Sie den einzigartigen Geschmack unserer Region.
        </p>
        <div className="hero-cta">
          <Link to="/shop" className="btn btn-primary">Zum Online-Shop</Link>
          <Link to="/about" className="btn btn-secondary">Unsere Geschichte</Link>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
