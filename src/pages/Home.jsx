import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ScrollReveal from '../components/utils/ScrollReveal';
import { articles } from './NewsPage';
import './Home.css';

const Home = () => {
  const latestNews = articles.slice(0, 3);

  return (
    <div>
      <Hero />
      <About />

      {/* ── News Preview Strip ──────────────────── */}
      <section className="home-news">
        <div className="home-news-inner">
          <ScrollReveal>
            <div className="home-news-header">
              <div>
                <span className="section-label">Aktuelles</span>
                <h2 className="section-title">News & Neuigkeiten</h2>
              </div>
              <Link to="/news" className="home-news-all">Alle News →</Link>
            </div>
          </ScrollReveal>

          <div className="home-news-grid">
            {latestNews.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 100}>
                <Link to={`/news/${article.id}`} className="home-news-card">
                  <div className="home-news-card-img">
                    <img src={article.image} alt={article.title} />
                    <span className="news-card-category">{article.category}</span>
                  </div>
                  <div className="home-news-card-body">
                    <p className="news-card-date">{article.date}</p>
                    <h3>{article.title}</h3>
                    <p className="news-card-excerpt">{article.excerpt}</p>
                    <span className="news-card-link">Mehr lesen →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ──────────────────────────── */}
      <section className="home-cta-strip">
        <ScrollReveal>
          <div className="home-cta-inner">
            <h2>Erleben Sie echtes Seetal-Handwerk</h2>
            <p>Besuchen Sie uns in unserem neuen Lokal oder bestellen Sie direkt online.</p>
            <div className="home-cta-btns">
              <Link to="/shop" className="btn-gold">Zum Online-Shop</Link>
              <Link to="/contact" className="btn-outline-gold">Kontakt aufnehmen</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
