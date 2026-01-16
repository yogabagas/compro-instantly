import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import './index.css';

const Products = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-header">
          <span className="section-badge">{t.products.badge}</span>
          <h2>{t.products.title}</h2>
          <p className="products-intro">{t.products.intro}</p>
        </div>
        
        <div className="products-grid">
          {t.products.solutions.map((solution, index) => (
            <div className="product-card" key={index}>
              <div className="product-number">{solution.number}</div>
              <div className="product-icon">{['💬', '📈', '🛍️', '⭐'][index]}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="product-features">
                {solution.tags.map((tag, i) => (
                  <span className="feature-tag" key={i}>{tag}</span>
                ))}
              </div>
              {index === 0 ? (
                <Link to="/customer-relation" className="discover-more-btn">
                  {t.customerRelation.discoverMore} →
                </Link>
              ) : (
                <button className="coming-soon-btn" disabled>
                  {t.products.comingSoon}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
