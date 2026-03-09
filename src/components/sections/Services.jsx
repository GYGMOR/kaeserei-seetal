import React, { useState } from 'react';
import { Wine, PartyPopper, Gift, Milk } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';
import './Services.css';

const servicesList = [
  { id: 1, title: 'Käsedegustationen', desc: 'Edle Tropfen und unser bester Käse in perfekter Harmonie.', icon: <Wine size={48} color="var(--accent-gold)" /> },
  { id: 2, title: 'Event-Catering', desc: 'Kulinarische Highlights für Ihren privaten oder geschäftlichen Anlass.', icon: <PartyPopper size={48} color="var(--accent-gold)" /> },
  { id: 3, title: 'Geschenkkörbe', desc: 'Individuell zusammengestellte Präsente für jeden Geschmack.', icon: <Gift size={48} color="var(--accent-gold)" /> },
  { id: 4, title: 'Käseherstellung', desc: 'Erleben Sie hautnah, wie unsere regionalen Meisterwerke entstehen.', icon: <Milk size={48} color="var(--accent-gold)" /> }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <ScrollReveal className="section-header">
          <h2>Was wir bieten</h2>
          <h3>Unsere Dienstleistungen</h3>
        </ScrollReveal>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div 
                className={`service-card glass-panel ${selectedService === service.title ? 'selected' : ''}`}
                onClick={() => setSelectedService(service.title)}
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="inquiry-panel glass-panel">
            <h3>Unverbindliche Anfrage</h3>
            <p>Interessiert an {selectedService ? `"${selectedService}"` : 'einer unserer Dienstleistungen'}? Schreiben Sie uns.</p>
            <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
               <div className="form-group-row">
                 <input type="text" placeholder="Vorname" required />
                 <input type="text" placeholder="Nachname" required />
               </div>
               <input type="email" placeholder="E-Mail Adresse" required />
               <textarea 
                 placeholder="Ihre Nachricht..." 
                 rows="4" 
                 required 
                 value={selectedService ? `Ich interessiere mich für ${selectedService}. ` : ''}
                 onChange={(e) => setSelectedService(null)} /* reset on manual edit just to allow typing */
               ></textarea>
               <button type="submit" className="btn btn-primary">Anfrage Senden</button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
