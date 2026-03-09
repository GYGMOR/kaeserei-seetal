import React, { useState } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Käsedegustationen',
    tagline: 'Für Geniesser & Neugierige',
    desc: 'Erleben Sie eine geführte Reise durch die Welt unserer handwerklichen Käse. Begleitet von ausgewählten Weinen aus der Region entdecken Sie die Feinheiten unserer Spezialitäten. Perfekt für Einzelpersonen, Paare oder Gruppen bis 20 Personen.',
    highlights: ['Private Gruppenführungen', 'Wein-Käse-Pairing', 'Reifekeller-Besichtigung'],
    images: [
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=700&h=500&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 2,
    title: 'Event-Catering',
    tagline: 'Ihr Anlass – unser Handwerk',
    desc: 'Von intimen Firmenanlässen bis zu grossen Feiern: Wir bringen die Qualität der Käserei Seetal direkt zu Ihnen. Unser Team kümmert sich um alles – vom aufwändigen Käsebuffet bis zum eleganten Apéro.',
    highlights: ['Buffet & Apéro-Setup', 'Anlieferung & Aufbau', 'Individuelle Menüplanung'],
    images: [
      'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=700&h=500&fit=crop',
      'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 3,
    title: 'Geschenkkörbe',
    tagline: 'Das perfekte Geschenk',
    desc: 'Überraschen Sie jemanden mit einem handgefertigten Käsekorb aus unserem Sortiment. Jeder Korb wird individuell zusammengestellt, schön verpackt und kann mit einer persönlichen Botschaft versehen werden.',
    highlights: ['Individuelle Zusammenstellung', 'Schweizweit lieferbar', 'Firmenbestellungen möglich'],
    images: [
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=700&h=500&fit=crop',
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 4,
    title: 'Käse-Workshop',
    tagline: 'Selber machen – selber erleben',
    desc: 'Unter Anleitung unseres Käsermeisters Johannes Müller tauchen Sie in die Welt der Käseherstellung ein. Von der Rohmilch bis zum fertigen Laib – ein unvergessliches Erlebnis für Einzel- und Gruppenbuchungen.',
    highlights: ['Max. 8 Teilnehmer', 'Ca. 3 Stunden Erlebnis', 'Laib zum Mitnehmen'],
    images: [
      'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=700&h=500&fit=crop',
      'https://images.unsplash.com/photo-1604599340287-2042e85a3802?w=400&h=300&fit=crop',
    ],
  },
];

const BookingModal = ({ service, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2000);
  };

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={e => e.stopPropagation()}>
        <button className="booking-close" onClick={onClose}>✕</button>
        {submitted ? (
          <div className="booking-success">
            <div className="booking-success-icon">✓</div>
            <h3>Anfrage gesendet!</h3>
            <p>Wir melden uns in Kürze bei Ihnen.</p>
          </div>
        ) : (
          <>
            <span className="booking-label">Jetzt buchen</span>
            <h2>{service.title}</h2>
            <p className="booking-subtitle">Füllen Sie das Formular aus – wir melden uns schnellstmöglich.</p>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="booking-row">
                <div className="booking-field">
                  <label>Vorname</label>
                  <input type="text" placeholder="Max" required />
                </div>
                <div className="booking-field">
                  <label>Nachname</label>
                  <input type="text" placeholder="Mustermann" required />
                </div>
              </div>
              <div className="booking-field">
                <label>E-Mail</label>
                <input type="email" placeholder="max@beispiel.ch" required />
              </div>
              <div className="booking-field">
                <label>Gewünschtes Datum</label>
                <input type="date" required />
              </div>
              <div className="booking-field">
                <label>Grund / Bemerkung</label>
                <textarea rows="3" placeholder={`Ich möchte ${service.title} buchen...`} required defaultValue={`Ich interessiere mich für ${service.title}. `} />
              </div>
              <button type="submit" className="booking-submit">Anfrage absenden →</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  const [bookingService, setBookingService] = useState(null);

  return (
    <section className="services-section">
      {/* Section header */}
      <div className="services-header-wrap">
        <ScrollReveal>
          <span className="section-label">Was wir bieten</span>
          <h2 className="section-title">Unsere Dienstleistungen</h2>
          <p className="section-desc">Ob Degustation, Event oder Workshop – erleben Sie handwerkliche Käsekunst aus dem Seetal.</p>
        </ScrollReveal>
      </div>

      {/* Alternating blocks */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={service.id} className={`service-block ${isEven ? 'block-normal' : 'block-reverse'}`}>
            <div className="service-block-inner">
              {/* Images side */}
              <ScrollReveal className="service-images" delay={100}>
                <div className="service-img-main">
                  <img src={service.images[0]} alt={service.title} />
                </div>
                <div className="service-img-secondary">
                  <img src={service.images[1]} alt={service.title + ' detail'} />
                </div>
              </ScrollReveal>

              {/* Text side */}
              <ScrollReveal className="service-text" delay={200}>
                <span className="service-tagline">{service.tagline}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-highlights">
                  {service.highlights.map((h, i) => (
                    <li key={i}><span className="bullet">✓</span>{h}</li>
                  ))}
                </ul>
                <button className="service-book-btn" onClick={() => setBookingService(service)}>
                  Jetzt buchen
                </button>
              </ScrollReveal>
            </div>
          </div>
        );
      })}

      {/* Booking modal */}
      {bookingService && (
        <BookingModal service={bookingService} onClose={() => setBookingService(null)} />
      )}
    </section>
  );
};

export default Services;
