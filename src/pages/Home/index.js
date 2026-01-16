import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Products from '../../components/Products';
import Services from '../../components/Services';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import './index.css';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when coming from another page
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="home-page">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;