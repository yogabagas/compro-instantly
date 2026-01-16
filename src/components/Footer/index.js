import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import './index.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        <ul className="footer-links">
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#products">{t.nav.products}</a></li>
          <li><a href="#services">{t.nav.services}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;