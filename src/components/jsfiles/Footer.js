import React from 'react';
import '../stylefiles/Footer.css';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '+919659008000';
  const email = 'contact@viruzverse.tech';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/viruzverse.tech?igsh=MXUyemZ6dWlkbTM1aQ==', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/viruzverse-solutions', '_blank');
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const whatsappNumber = phoneNumber.replace(/\D/g, '');
    const message = encodeURIComponent("Hello, I would like to connect with you!");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@Viruzverse', '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a passionate team dedicated to creating innovative web solutions that help businesses thrive in the digital world.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><button onClick={() => scrollToSection('home')} className="footer-link">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="footer-link">About</button></li>
            <li><button onClick={() => scrollToSection('services')} className="footer-link">Services</button></li>
            <li><button onClick={() => scrollToSection('courses')} className="footer-link">Courses</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button></li>
            <li><button onClick={() => scrollToSection('team')} className="footer-link">Our Team</button></li>
            <li><button onClick={() => scrollToSection('career')} className="footer-link">Career</button></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <a href="#" onClick={handleWhatsAppClick} className="contact-link">
                <FaWhatsapp className="contact-icon" /> {phoneNumber}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="contact-link">
                <FaEnvelope className="contact-icon" /> {email}
              </a>
            </li>
            <li>Location: Tamilnadu, India</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a 
              href="#" 
              onClick={handleInstagramClick} 
              className="social-icon" 
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              onClick={handleLinkedInClick} 
              className="social-icon" 
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedin />
            </a>
            <a 
              href="#" 
              onClick={handleYouTubeClick} 
              className="social-icon" 
              aria-label="Visit our YouTube channel"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Viruzverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
