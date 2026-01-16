import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import './index.css';

const Services = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const icons = ['🎯', '⚡', '🔒', '🤝'];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-badge">{t.services.badge}</span>
          <h2>{t.services.title}</h2>
          <p className="services-intro">{t.services.intro}</p>
        </div>
        
        <div className="services-benefits">
          {t.services.benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-icon">{icons[index]}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
