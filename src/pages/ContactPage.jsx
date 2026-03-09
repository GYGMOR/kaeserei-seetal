import React from 'react';
import Contact from '../components/sections/Contact';
import PageHero from '../components/utils/PageHero';

const ContactPage = () => (
  <div>
    <PageHero
      title="Kontakt"
      subtitle="Wir sind für Sie da – sprechen Sie uns an"
      image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1400&h=400&fit=crop"
    />
    <Contact />
  </div>
);

export default ContactPage;
