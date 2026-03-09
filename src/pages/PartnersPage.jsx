import React from 'react';
import Partners from '../components/sections/Partners';
import PageHero from '../components/utils/PageHero';

const PartnersPage = () => (
  <div>
    <PageHero
      title="Partner"
      subtitle="Starke Beziehungen für höchste Qualität"
      image="https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=1400&h=400&fit=crop"
    />
    <Partners />
  </div>
);

export default PartnersPage;
