import React, { useEffect } from 'react';
import Header from './components/jsfiles/Header';
import Hero from './components/jsfiles/Hero';
import About from './components/jsfiles/About';
import Services from './components/jsfiles/Services';
import Courses from './components/jsfiles/Courses';
import OurTeam from './components/jsfiles/OurTeam';
import Contact from './components/jsfiles/Contact';
import Career from './components/jsfiles/Career';
import Footer from './components/jsfiles/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section id="home" className="visible">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="team">
          <OurTeam />
        </section>
        <section id="career">
          <Career />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;