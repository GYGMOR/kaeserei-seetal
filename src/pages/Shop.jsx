import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';
import './Shop.css';

const products = [
  { id: 1, name: 'Seetaler Bergkäse', price: '24.50 CHF', desc: 'Würziger Hartkäse, 12 Monate gereift.', image: 'about_2.png' },
  { id: 2, name: 'Cremiger Rahmkäse', price: '18.00 CHF', desc: 'Mild und zartschmelzend für die ganze Familie.', image: 'about_1.png' },
  { id: 3, name: 'Trüffelzauber', price: '32.00 CHF', desc: 'Verfeinert mit echtem schwarzen Trüffel.', image: 'hero_bg.png' },
  { id: 4, name: 'Fondue Hausmischung', price: '28.00 CHF', desc: 'Unsere geheime Rezeptur für den perfekten Abend.', image: 'about_2.png' }
];

const Shop = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    alert('Produkt wurde dem Warenkorb hinzugefügt (Demo-Modus).');
  };

  return (
    <div className="page-wrapper animate-in shop-page">
      <div className="container">
        <div className="shop-header">
          <ScrollReveal className="shop-header-text">
            <h2>Genuss für Zuhause</h2>
            <h3>Unser Onlineshop</h3>
            <p>Bestellen Sie unsere Spezialitäten bequem zu sich nach Hause. (Aktuell in der Demo-Phase)</p>
          </ScrollReveal>
          <div className="cart-indicator glass-panel">
            <ShoppingCart size={24} color="var(--accent-gold)" />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 100}>
              <div className="product-card glass-panel">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="price-tag">{product.price}</div>
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>{product.desc}</p>
                  <button className="btn btn-primary w-100" onClick={addToCart}>In den Warenkorb</button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
