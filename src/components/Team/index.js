import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import './index.css';

const Team = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-header">
          <span className="section-badge">{t.team.badge}</span>
          <h2>{t.team.title}</h2>
          <p className="team-intro">{t.team.intro}</p>
        </div>
        
        <div className="team-grid">
          {t.team.members.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-avatar">👤</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
