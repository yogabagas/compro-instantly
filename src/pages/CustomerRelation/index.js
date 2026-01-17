import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import './index.css';

const CustomerRelation = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="customer-relation-page">
      <Header />
      
      <section className="customer-relation-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">{t.nav.home}</Link>
            <span>/</span>
            <span>{t.customerRelation.title}</span>
          </div>
          <h1>{t.customerRelation.title}</h1>
          <p className="subtitle">{t.customerRelation.subtitle}</p>
        </div>
      </section>

      <section className="customer-relation-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>{t.customerRelation.overview.title}</h2>
              <p>{t.customerRelation.overview.description}</p>
            </div>
            <div className="overview-visual">
              <div className="channels-ticker-wrapper">
                <div className="channels-ticker">
                  {/* Render channels multiple times for seamless loop */}
                  {[...new Array(3)].map((_, setIndex) => (
                    <React.Fragment key={setIndex}>
                      {t.customerRelation.channels.map((channel, index) => (
                        <div className="channel-item" key={`${setIndex}-${index}`}>
                          <div className="channel-icon">
                            {channel.isImage ? (
                              <img src={channel.icon} alt={channel.name} className="channel-icon-img" />
                            ) : (
                              channel.icon
                            )}
                          </div>
                          <span>{channel.name}</span>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>{t.customerRelation.howItWorks.title}</h2>
          <p className="section-intro">{t.customerRelation.howItWorks.intro}</p>
          
          <div className="steps-grid">
            {t.customerRelation.howItWorks.steps.map((step, index) => (
              <div className="step-card" key={index}>
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>{t.customerRelation.features.title}</h2>
          <div className="features-grid">
            {t.customerRelation.features.list.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>{t.customerRelation.benefits.title}</h2>
          <div className="benefits-list">
            {t.customerRelation.benefits.list.map((benefit, index) => (
              <div className="cr-benefit-item" key={index}>
                <div className="cr-benefit-icon">✓</div>
                <div className="cr-benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t.customerRelation.cta.title}</h2>
            <p>{t.customerRelation.cta.description}</p>
            <a href="/#contact" className="cta-button">{t.customerRelation.cta.button}</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerRelation;
