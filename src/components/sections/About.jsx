import React from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT: Text */}
        <ScrollReveal className="about-text-col">
          <span className="section-label">Tradition seit 1985</span>
          <h2 className="section-title">Über uns</h2>
          <p>Im Herzen des Seetals verbinden wir seit über 30 Jahren traditionelles Handwerk mit modernem Genuss. Unsere Käserei ist mehr als nur ein Produktionsort – sie ist ein Treffpunkt für alle, die echte Qualität und authentischen Geschmack schätzen.</p>
          <p>Jeder unserer Käselaibe erzählt die Geschichte unserer Region, geprägt von saftigen Wiesen, glücklichen Kühen und der Leidenschaft unserer Käsemeister.</p>
          <blockquote className="about-quote">
            „Guter Käse braucht Zeit, Liebe und die beste Milch. Genau das geben wir ihm."
          </blockquote>
          <div className="about-stats">
            <div className="stat"><span className="stat-num">30+</span><span className="stat-label">Jahre Erfahrung</span></div>
            <div className="stat"><span className="stat-num">40+</span><span className="stat-label">Käsesorten</span></div>
            <div className="stat"><span className="stat-num">6</span><span className="stat-label">Spezialisten</span></div>
          </div>
        </ScrollReveal>

        {/* RIGHT: Images */}
        <ScrollReveal className="about-img-col" delay={200}>
          <div className="about-img-grid">
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&h=700&fit=crop"
                alt="Käserei Handwerk"
              />
            </div>
            <div className="about-img-secondary">
              <img
                src="https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400&h=300&fit=crop"
                alt="Käselaibe im Regal"
              />
              <img
                src="https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=400&h=280&fit=crop"
                alt="Frische Milch"
              />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
