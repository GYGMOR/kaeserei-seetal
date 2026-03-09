import React from 'react';
import './Gallery.css';

const galleryImages = [
  { id: 1, type: 'large', src: '/hero_bg.png' },
  { id: 2, type: 'small', src: '/about_1.png' },
  { id: 3, type: 'vertical', src: '/about_2.png' },
  { id: 4, type: 'small', src: '/hero_bg.png' },
  { id: 5, type: 'large', src: '/about_1.png' },
  { id: 6, type: 'small', src: '/about_2.png' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container" style={{maxWidth: '1400px', margin: '0 auto', padding: '0 2rem'}}>
        <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)', marginBottom: '0.5rem'}}>Impressionen</h2>
          <h3 style={{fontSize: '2.5rem', color: 'var(--text-main)'}}>Unsere Galerie</h3>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={img.id} className={`gallery-item ${img.type} glass-panel`}>
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={`Galerie ${index + 1}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
