import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Partners from '../components/sections/Partners';

const Home = () => {
  return (
    <div className="animate-in">
      <Hero />
      <About />
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <Link to="/services" className="btn btn-primary glass-panel" style={{marginRight: '1rem'}}>Alle Dienstleistungen ansehen</Link>
        <Link to="/team" className="btn btn-secondary glass-panel">Unser Team kennenlernen</Link>
      </div>
      <Partners />
    </div>
  );
};

export default Home;
