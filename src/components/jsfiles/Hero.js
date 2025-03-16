import React, { useState, useEffect } from 'react';
import '../stylefiles/Hero.css';

const Hero = () => {
  const [currentSolution, setCurrentSolution] = useState(0);
  const solutions = [
    'Web Applications',
    'Mobile Applications',
    'Cloud Solutions',
    'AI Integration',
    'Cyber Security',
    'Digital Transformation'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSolution((prev) => (prev + 1) % solutions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-line first">We are, </h2>
          <h1 className="hero-line second">Viruzverse Solution</h1>
          <div className="hero-line third">
            <span className="static-text">Our Programs: </span>
            <div className="card">
              <div className="loader">
                <div className="words">
                  <span className="word">Web Development</span>
                  <span className="word">UI/Ux Design</span>
                  <span className="word">AI Integration</span>
                  <span className="word">DevOps</span>
                  <span className="word">Iot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;