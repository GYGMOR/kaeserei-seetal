import React from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import './About.css';

const reviews = [
  {
    id: 1,
    name: 'Stefan Berger',
    rating: 5,
    date: 'Februar 2026',
    avatar: 'SB',
    text: 'Absolut fantastisch! Der Bergkäse ist der beste, den ich je probiert habe. Die Atmosphäre im neuen Lokal ist wunderschön und das Team super freundlich. Komme definitiv wieder!',
  },
  {
    id: 2,
    name: 'Monika Huber',
    rating: 5,
    date: 'Januar 2026',
    avatar: 'MH',
    text: 'Wir haben eine Käsedegustation gebucht – ein unvergessliches Erlebnis! Tolle Auswahl, perfekte Beratung und die Wein-Käse-Kombis waren einfach göttlich. Sehr empfehlenswert!',
  },
  {
    id: 3,
    name: 'Patrick Zimmermann',
    rating: 5,
    date: 'März 2026',
    avatar: 'PZ',
    text: 'Top Qualität, freundliche Bedienung und ein wunderschönes Ambiente. Die handgemachten Käsesorten übertreffen alles aus dem Supermarkt bei Weitem. 5 Sterne verdient!',
  },
  {
    id: 4,
    name: 'Sabine Koch',
    rating: 5,
    date: 'Dezember 2025',
    avatar: 'SK',
    text: 'Unsere Weihnachtsfeier wurde durch die Käserei Seetal unvergesslich. Der Geschenkkorb für die Kollegen war eine riesige Freude. Vielen Dank für den tollen Service!',
  },
  {
    id: 5,
    name: 'Andreas Frei',
    rating: 5,
    date: 'Februar 2026',
    avatar: 'AF',
    text: 'Endlich eine Käserei, die wirklich Handwerk lebt. Der Workshop war lehrreich, spassig und ich durfte meinen eigenen Laib mitnehmen. Absolute Empfehlung für jeden Käseliebhaber!',
  },
  {
    id: 6,
    name: 'Julia Meier',
    rating: 5,
    date: 'Januar 2026',
    avatar: 'JM',
    text: 'Das neue Lokal ist der Hammer – modern, gemütlich und trotzdem authentisch. Die Trüffelkäse-Edition war genau das Richtige für unseren Geburtstags-Apéro. Danke!',
  },
  {
    id: 7,
    name: 'Tobias Brunner',
    rating: 4,
    date: 'März 2026',
    avatar: 'TB',
    text: 'Sehr gute Produkte und nettes Personal. Der Bergkäse "Seetaler Gold" ist mein neuer Liebling. Bin begeistert von der Vielfalt und freue mich auf den nächsten Besuch.',
  },
];

const Stars = ({ count }) => (
  <div className="review-stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? 'star filled' : 'star'}>★</span>
    ))}
  </div>
);

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

      {/* ── GOOGLE REVIEWS ────────────────────────────────── */}
      <div className="reviews-section">
        <ScrollReveal>
          <div className="reviews-header">
            <div className="reviews-header-left">
              <span className="section-label">Kundenstimmen</span>
              <h2 className="section-title">Was unsere Gäste sagen</h2>
            </div>
            <div className="reviews-google-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google Rezensionen</span>
              <div className="reviews-aggregate">
                <span className="agg-score">5.0</span>
                <Stars count={5} />
                <span className="agg-count">(127 Bewertungen)</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="reviews-track-wrap">
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.id} delay={i * 60}>
                <div className="review-card">
                  <div className="review-top">
                    <div className="review-avatar">{review.avatar}</div>
                    <div className="review-meta">
                      <span className="review-name">{review.name}</span>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                  <Stars count={review.rating} />
                  <p className="review-text">"{review.text}"</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
