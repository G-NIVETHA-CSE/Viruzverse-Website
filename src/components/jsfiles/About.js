import React from 'react';
import '../stylefiles/About.css';

const About = () => {
  return (
    <div className="about-container">

      <section className="about-content">
        <div className="about-heading">
          <h1>🚀 Empowering the Future, One Innovation at a Time!</h1>
        </div>

        <div className="about-section">
          <div className="about-box">
            <h2>Who We Are</h2>
            <p>Viruzverse Solutions is a cutting-edge technology company dedicated to revolutionizing the digital space by providing innovative and transformative solutions.</p>
          </div>

          <div className="about-box">
            <h2>Our Mission</h2>
            <p>Our mission is to deliver impactful tech solutions that empower businesses and individuals to achieve operational excellence, growth, and success in a digital-first world.</p>
          </div>

          <div className="about-box">
            <h2>Our Vision</h2>
            <p>We envision a world where technology drives meaningful change. As a global leader in digital transformation, we strive to provide innovative tools for a smarter, more connected future.</p>
          </div>

          <div className="about-box">
            <h2>About Viruzverse Solutions</h2>
            <p>At Viruzverse Solutions, we specialize in AI, Web & Mobile Development, Cybersecurity, and Cloud Solutions. We bridge the gap between business needs and cutting-edge technology to deliver real-world results.</p>
          </div>
        </div>

        {/* Additional Content Divs */}
        <div className="about-section">
          <div className="about-box">
            <h2>Our Values</h2>
            <p>We believe in integrity, innovation, and excellence. Our values guide us in creating positive and sustainable impacts for businesses and communities through technology.</p>
          </div>

          <div className="about-box">
            <h2>Our Team</h2>
            <p>We are a diverse group of passionate professionals with expertise in various technology fields, including AI, cloud computing, and cybersecurity. Our collaborative approach drives our innovation and success.</p>
          </div>

          <div className="about-box">
            <h2>Technology Expertise</h2>
            <p>Our team specializes in delivering cutting-edge solutions in AI, machine learning, data analytics, mobile app development, cloud services, and cybersecurity to create a smarter future for businesses.</p>
          </div>
        </div>

        <div className="quote">
          <h3>"Innovation distinguishes between a leader and a follower." – Steve Jobs</h3>
        </div>
      </section>
    </div>
  );
};

export default About;
