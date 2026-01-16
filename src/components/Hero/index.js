import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import './index.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-badge">{t.hero.badge}</div>
      <h1>{t.hero.title}</h1>
      <p className="hero-subtitle">{t.hero.subtitle}</p>
      <button className="hero-button" onClick={() => scrollToSection('products')}>{t.hero.button}</button>
      
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-number">100+</div>
          <div className="stat-label">{t.hero.stats.partners}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">4+</div>
          <div className="stat-label">{t.hero.stats.solutions}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">{t.hero.stats.support}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">∞</div>
          <div className="stat-label">{t.hero.stats.growth}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
