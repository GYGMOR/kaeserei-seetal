import React from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        <ScrollReveal className="about-text-wrapper">
          <div className="section-header">
            <h2>Tradition seit 1985</h2>
            <h3>Über uns</h3>
          </div>
          <div className="about-text glass-panel">
            <p>Im Herzen des Seetals verbinden wir seit über 30 Jahren traditionelles Handwerk mit modernem Genuss. Unsere Käserei ist mehr als nur ein Produktionsort – sie ist ein Treffpunkt für alle, die echte Qualität und authentischen Geschmack schätzen.</p>
            <p>Jeder unserer Käselaibe erzählt die Geschichte unserer Region, geprägt von saftigen Wiesen, glücklichen Kühen und der Leidenschaft unserer Käsemeister.</p>
            <p className="highlight">"Guter Käse braucht Zeit, Liebe und die beste Milch. Genau das geben wir ihm."</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} className="about-images-wrapper">
          <div className="about-images">
            <div className="img-wrapper img-1">
              <img src="about_1.png" alt="Handwerk in der Käserei" />
            </div>
            <div className="img-wrapper img-2">
              <img src="about_2.png" alt="Käsespezialitäten" />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
