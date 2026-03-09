import React from 'react';
import Gallery from '../components/sections/Gallery';
import PageHero from '../components/utils/PageHero';

const GalleryPage = () => (
  <div>
    <PageHero
      title="Galerie"
      subtitle="Einblicke in unsere Käserei und das Seetal"
      image="https://images.unsplash.com/photo-1559561853-08451507cbe7?w=1400&h=400&fit=crop"
    />
    <Gallery />
  </div>
);

export default GalleryPage;
