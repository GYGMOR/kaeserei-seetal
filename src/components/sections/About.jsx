import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        <div className="about-text glass-panel">
          <h2>Wer wir sind</h2>
          <h3>Käserei Seetal</h3>
          <p>
            Die Käserei Seetal ist ein Ort, an dem Tradition auf moderne Perfektion trifft. 
            Mit Leidenschaft und höchster Handwerkskunst kreieren wir Käsespezialitäten, 
            die nicht nur den Gaumen verwöhnen, sondern auch eine Geschichte erzählen. 
            Unser neues Lokal vereint rustikales Handwerk mit einer exklusiven, modernen Atmosphäre.
          </p>
          <div className="philosophy-box">
            <h4>Unsere Philosophie</h4>
            <p>
              Qualität ohne Kompromisse. Wir verwenden ausschliesslich beste regionale Milch 
              und geben unserem Käse die Zeit, die er braucht, um sein volles Aroma in 
              unseren historischen Reifekellern zu entwickeln.
            </p>
          </div>
        </div>

        <div className="about-images">
          <div className="img-wrapper img-1">
            <img src="about_1.png" alt="Handwerk in der Käserei" />
          </div>
          <div className="img-wrapper img-2">
            <img src="about_2.png" alt="Käsespezialitäten" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
