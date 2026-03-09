import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import Partners from '../components/sections/Partners';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Partners />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
