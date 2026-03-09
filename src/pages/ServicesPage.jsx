import React from 'react';
import Services from '../components/sections/Services';
import PageHero from '../components/utils/PageHero';

const ServicesPage = () => (
  <div>
    <PageHero
      title="Dienstleistungen"
      subtitle="Massgeschneiderte Erlebnisse rund um unsere Käsekunst"
      image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=400&fit=crop"
    />
    <Services />
  </div>
);

export default ServicesPage;
