import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info glass-panel">
          <h2>Wir sind für Sie da</h2>
          <h3>Kontaktieren Sie uns</h3>
          <p>Haben Sie Fragen zu unseren Produkten oder möchten Sie eine Bestellung aufgeben? Schreiben Sie uns eine Nachricht, wir helfen Ihnen gerne weiter.</p>
          
          <div className="info-block">
            <div className="info-item">
              <span className="info-icon"><MapPin size={24} color="var(--accent-gold)" /></span>
              <div>
                <h4>Adresse</h4>
                <p>Käsereistrasse 1<br/>5732 Zetzwil<br/>Schweiz</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon"><Phone size={24} color="var(--accent-gold)" /></span>
              <div>
                <h4>Telefon</h4>
                <p>+41 62 123 45 67</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon"><Mail size={24} color="var(--accent-gold)" /></span>
              <div>
                <h4>E-Mail</h4>
                <p>info@kaeserei-seetal.ch</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper glass-panel">
          <h3>Schreiben Sie uns</h3>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Ihr Name" required />
              </div>
              <div className="form-group">
                <label>E-Mail</label>
                <input type="email" placeholder="Ihre E-Mail" required />
              </div>
            </div>
            <div className="form-group">
              <label>Betreff</label>
              <input type="text" placeholder="Worum geht es?" required />
            </div>
            <div className="form-group">
              <label>Nachricht</label>
              <textarea rows="5" placeholder="Ihre Nachricht an uns..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Nachricht absenden</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
