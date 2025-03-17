import React, { useState, useEffect } from 'react';
import '../stylefiles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="hero-text left-half">
          <h2 className="hero-line first">Welcome to</h2>
          <h1 className="holo-glow">Viruzverse Solutions</h1>
          <p className="hero-description">Empowering businesses with cutting-edge technology solutions. From AI-driven automation to seamless cloud integration, we drive digital transformation tailored to your needs.</p>
        </div>
        <div className="hero-image right-half">
          <img src="/assets/hero-image.jpg" alt="Viruzverse Solutions" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
