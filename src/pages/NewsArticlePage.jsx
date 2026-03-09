import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { articles } from './NewsPage';
import './NewsArticlePage.css';

const NewsArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) return (
    <div className="article-notfound">
      <p>Artikel nicht gefunden.</p>
      <Link to="/news">← Zurück zur Übersicht</Link>
    </div>
  );

  const related = articles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="article-page">
      {/* Hero */}
      <div className="article-hero" style={{ backgroundImage: `url('${article.image}')` }}>
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <Link to="/news" className="article-back">← Alle News</Link>
          <span className="news-category" style={{ marginTop: '1rem' }}>{article.category}</span>
          <h1>{article.title}</h1>
          <p className="article-meta">{article.date} · {article.readTime} Lesezeit</p>
        </div>
      </div>

      <div className="article-body-container">
        <article className="article-body">
          <p className="article-lead">{article.excerpt}</p>

          <p>Die Käserei Seetal ist bekannt für ihre aussergewöhnliche Qualität und Hingabe zur Handwerkskunst. Ob bei speziellen Anlässen oder im Alltag – unsere Produkte stehen für Authentizität und Genuss auf höchstem Niveau.</p>

          <h2>Handwerk mit Herz</h2>
          <p>Hinter jedem Käselaib steckt mehr als nur ein Rezept. Es ist die Leidenschaft unserer Käsermeister, die Qualität der regionalen Rohmilch und die perfekten Bedingungen in unserem Reifekeller, die den Unterschied ausmachen.</p>
          <p>Wir sind stolz auf unsere Wurzeln im Seetal und möchten diese Verbundenheit mit der Region in jedem unserer Produkte zum Ausdruck bringen.</p>

          <h2>Zukunft des Genusses</h2>
          <p>Die Käserei Seetal geht mit der Zeit, ohne ihre Tradition zu vergessen. Innovation und Handwerk ergänzen sich perfekt – für ein Erlebnis, das Sie immer wieder zurückbringt.</p>

          <Link to="/contact" className="article-cta">Kontakt aufnehmen →</Link>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="article-related">
            <h3>Weitere Artikel</h3>
            <div className="article-related-grid">
              {related.map(rel => (
                <Link key={rel.id} to={`/news/${rel.id}`} className="article-related-card">
                  <img src={rel.image} alt={rel.title} />
                  <div className="article-related-body">
                    <span className="news-category">{rel.category}</span>
                    <h4>{rel.title}</h4>
                    <p>{rel.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default NewsArticlePage;
