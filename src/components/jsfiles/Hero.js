import React, { useState, useEffect } from 'react';
import '../stylefiles/Hero.css';
import pic1 from '../../assets/pic1.png'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="hero-text left-half">
          <h2 className="hero-line first">Welcome to</h2>
          <h1 className="holo-glow">Viruzverse Solution</h1>
          <p className="hero-description">Empowering businesses with cutting-edge technology solutions.<br />From AI-driven automation to seamless cloud integration, we drive digital transformation tailored to your needs.</p>
        </div>
        <div className="hero-image right-half">
          <img src={pic1} alt="Viruzverse Solution" className="responsive-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
