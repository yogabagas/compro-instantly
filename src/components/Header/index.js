import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import './index.css';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation(language);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  const handleNavClick = (e, section) => {
    if (!isHomePage) {
      e.preventDefault();
      navigate('/' + section);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a 
            href="/#home" 
            className="logo-link"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <img src="/logo.svg" alt="PT. Juara Satu Indonesia" className="logo-image" />
          </a>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="/#home" onClick={(e) => handleNavClick(e, '#home')}>{t.nav.home}</a></li>
              <li><a href="/#about" onClick={(e) => handleNavClick(e, '#about')}>{t.nav.about}</a></li>
              <li><a href="/#products" onClick={(e) => handleNavClick(e, '#products')}>{t.nav.products}</a></li>
              <li><a href="/#services" onClick={(e) => handleNavClick(e, '#services')}>{t.nav.services}</a></li>
              <li><a href="/#team" onClick={(e) => handleNavClick(e, '#team')}>{t.nav.team}</a></li>
              <li><a href="/#contact" onClick={(e) => handleNavClick(e, '#contact')}>{t.nav.contact}</a></li>
              <li>
                <button 
                  className="language-toggle" 
                  onClick={toggleLanguage}
                  aria-label="Toggle language"
                >
                  {language === 'id' ? 'EN' : 'ID'}
                </button>
              </li>
              <li>
                <button 
                  className="theme-toggle" 
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {isDark ? '☀️' : '🌙'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
