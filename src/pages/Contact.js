import React, { useState, useEffect } from 'react';
import '../stylefiles/Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your public key
    window.emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'contact.viruzverse@proton.me'
      };

      // Send email using EmailJS
      await window.emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Show success message
      setStatus('success');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Let's Build Something Amazing</h1>
          <p>Ready to bring your web ideas to life? We're here to help!</p>
          
          <div className="contact-info">
            <div className="info-item">
              <FaPhone className="info-icon" />
              <p>+91 74186 76100</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>contact.viruzverse@proton.me</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>Tamilnadu, India</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                required
                rows="6"
              />
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="status-message success">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="status-message error">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
