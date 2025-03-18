import React, { useState } from 'react';
import '../stylefiles/Footer.css';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '+917418676100';
  const email = 'contact.viruzverse@proton.me';
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/viruzverse.tech?igsh=MXUyemZ6dWlkbTM1aQ==', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106396477&keywords=viruzverse%20solutions&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=a57d1fe1-a8d5-4a7d-9eae-b7ad2812f26d&sid=', '_blank');
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const whatsappNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const message = encodeURIComponent("Hello, I would like to connect with you!"); // Pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@Viruzverse', '_blank');
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowEmailForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) throw new Error('Failed to send email');

      setStatus('success');
      setEmailData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setShowEmailForm(false);
        setStatus('');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
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
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/services">Services</Link></li>
         <li><Link to="/courses">Courses</Link></li>
         <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/team">Our Team</Link></li>
</ul>

        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>
            <a href="#" onClick={handleWhatsAppClick} className="contact-link">
  <FaWhatsapp className="contact-icon" /> {phoneNumber}</a>
            </li>
            <li>
              <a href="#" onClick={handleEmailClick} className="contact-link">
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
      
      {showEmailForm && (
        <div className="email-form-overlay">
          <div className="email-form">
            <button className="close-button" onClick={() => setShowEmailForm(false)}>×</button>
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={emailData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={emailData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={emailData.subject}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={emailData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="success-message">Email sent successfully!</p>}
              {status === 'error' && <p className="error-message">Failed to send email. Please try again.</p>}
            </form>
        </div>
        </div>
      )}
       <div className="footer-bottom">
          <p>&copy; {currentYear} ViruzVerse. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;