import React from 'react';
import About from '../components/sections/About';
import PageHero from '../components/utils/PageHero';

const AboutPage = () => (
  <div>
    <PageHero
      title="Über uns"
      subtitle="Handwerk, Leidenschaft und über 30 Jahre Erfahrung im Seetal"
      image="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1400&h=400&fit=crop"
    />
    <About />
  </div>
);

export default AboutPage;
