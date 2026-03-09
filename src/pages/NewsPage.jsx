import React from 'react';
import { Link } from 'react-router-dom';
import './NewsPage.css';

export const articles = [
  {
    id: 1,
    category: 'Neuigkeiten',
    date: '5. März 2026',
    title: 'Grosser Erfolg am Seetaler Käsefest',
    excerpt: 'Unser Bergkäse «Seetaler Gold» gewann die Gold-Medaille am diesjährigen regionalen Käsefest. Eine riesige Freude für unser gesamtes Team!',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&h=500&fit=crop',
    readTime: '3 Min.',
  },
  {
    id: 2,
    category: 'Produkt',
    date: '20. Feb. 2026',
    title: 'Neue Trüffelkäse-Edition limitiert erhältlich',
    excerpt: 'Nur für kurze Zeit: Unser exklusiver Trüffelkäse in Zusammenarbeit mit dem Tessiner Trüffelhaus ist jetzt in unserem Shop verfügbar.',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&h=500&fit=crop',
    readTime: '2 Min.',
  },
  {
    id: 3,
    category: 'Event',
    date: '10. Feb. 2026',
    title: 'Käse-Workshop: Noch wenige Plätze frei',
    excerpt: 'Am 28. März laden wir zu einem exklusiven Handwerks-Workshop ein. Lernen Sie direkt von unserem Käsermeister, wie echter Seetal-Käse entsteht.',
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=800&h=500&fit=crop',
    readTime: '4 Min.',
  },
  {
    id: 4,
    category: 'Nachhaltigkeit',
    date: '1. Feb. 2026',
    title: '100% erneuerbare Energie in unserer Käserei',
    excerpt: 'Ab sofort betreiben wir unsere gesamte Produktion mit Solarenergie. Ein wichtiger Schritt für die Zukunft unserer Region und unseres Handwerks.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=500&fit=crop',
    readTime: '3 Min.',
  },
  {
    id: 5,
    category: 'Team',
    date: '15. Jan. 2026',
    title: 'Willkommen, Anna Zimmermann!',
    excerpt: 'Wir freuen uns, Anna als neue Kreations-Spezialistin in unserem Team begrüssen zu dürfen. Sie bringt frischen Wind und spannende Rezeptideen mit.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=500&fit=crop',
    readTime: '2 Min.',
  },
  {
    id: 6,
    category: 'Neuigkeiten',
    date: '3. Jan. 2026',
    title: 'Das neue Lokal ist eröffnet!',
    excerpt: 'Nach monatelanger Planung und Umbau strahlt unser neues Lokal in neuem Glanz. Besuchen Sie uns und geniessen Sie die einzigartige Atmosphäre.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
    readTime: '5 Min.',
  },
];

const NewsPage = () => {
  return (
    <div className="news-page">
      {/* Page hero */}
      <div className="news-hero">
        <div
          className="news-hero-bg"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1452195100486-9cc805987862?w=1400&h=400&fit=crop')` }}
        />
        <div className="news-hero-overlay" />
        <div className="news-hero-content">
          <span className="news-hero-label">Käserei Seetal</span>
          <h1>News & Aktuelles</h1>
          <div className="page-hero-line" />
        </div>
      </div>

      <div className="news-container">
        {/* Featured article */}
        <Link to={`/news/${articles[0].id}`} className="news-featured">
          <div className="news-featured-img">
            <img src={articles[0].image} alt={articles[0].title} />
          </div>
          <div className="news-featured-body">
            <div className="news-meta">
              <span className="news-category">{articles[0].category}</span>
              <span className="news-date">{articles[0].date}</span>
              <span className="news-read">{articles[0].readTime} Lesezeit</span>
            </div>
            <h2>{articles[0].title}</h2>
            <p>{articles[0].excerpt}</p>
            <span className="news-read-btn">Artikel lesen →</span>
          </div>
        </Link>

        {/* Grid articles */}
        <div className="news-grid">
          {articles.slice(1).map(article => (
            <Link key={article.id} to={`/news/${article.id}`} className="news-card">
              <div className="news-card-img">
                <img src={article.image} alt={article.title} />
                <span className="news-card-category">{article.category}</span>
              </div>
              <div className="news-card-body">
                <p className="news-card-date">{article.date} · {article.readTime} Lesezeit</p>
                <h3>{article.title}</h3>
                <p className="news-card-excerpt">{article.excerpt}</p>
                <span className="news-card-link">Mehr lesen →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
