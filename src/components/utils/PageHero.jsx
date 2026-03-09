import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle, image }) => {
  return (
    <div className="page-hero">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        <div className="page-hero-line" />
      </div>
    </div>
  );
};

export default PageHero;
