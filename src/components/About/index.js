import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import './index.css';

const About = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <span className="section-badge">{t.about.badge}</span>
          <h2>{t.about.title}</h2>
        </div>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">💡</div>
            <h3>{t.about.vision.title}</h3>
            <p>{t.about.vision.description}</p>
          </div>
          
          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3>{t.about.mission.title}</h3>
            <p>{t.about.mission.description}</p>
          </div>
          
          <div className="about-card">
            <div className="card-icon">⚡</div>
            <h3>{t.about.platform.title}</h3>
            <p>{t.about.platform.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;