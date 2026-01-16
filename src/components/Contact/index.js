import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import './index.css';

const Contact = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessCategory: '',
    purpose: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // EmailJS configuration
    const serviceId = 'service_instantly'; // You'll need to set this up
    const templateId = 'template_contact'; // You'll need to set this up
    const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to set this up

    try {
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'ybagasakthi@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          business_name: formData.businessName,
          business_category: formData.businessCategory,
          message: formData.purpose,
        },
        publicKey
      );

      setStatus({ type: 'success', message: t.contact.form.success });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessName: '',
        businessCategory: '',
        purpose: ''
      });
    } catch (error) {
      console.error('Email error:', error);
      setStatus({ type: 'error', message: t.contact.form.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-badge">{t.contact.badge}</span>
          <h2>{t.contact.title}</h2>
          <p className="contact-intro">{t.contact.intro}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">{t.contact.form.firstName} *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t.contact.form.placeholders.firstName}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">{t.contact.form.lastName} *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t.contact.form.placeholders.lastName}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email} *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.form.placeholders.email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t.contact.form.phone} *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.contact.form.placeholders.phone}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="businessName">{t.contact.form.businessName} *</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder={t.contact.form.placeholders.businessName}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="businessCategory">{t.contact.form.businessCategory} *</label>
              <select
                id="businessCategory"
                name="businessCategory"
                value={formData.businessCategory}
                onChange={handleChange}
                required
              >
                {t.contact.form.categories.map((category, index) => (
                  <option key={index} value={category} disabled={index === 0}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="purpose">{t.contact.form.purpose} *</label>
            <textarea
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder={t.contact.form.placeholders.purpose}
              rows="5"
              required
            ></textarea>
          </div>

          {status.message && (
            <div className={`form-status ${status.type}`}>
              {status.message}
            </div>
          )}

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
