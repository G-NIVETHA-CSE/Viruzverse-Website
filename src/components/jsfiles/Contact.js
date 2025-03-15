import React, { useState } from 'react';
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending...');

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Failed to send message. Try again.");
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
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email *" required />
              </div>
            </div>

            <div className="form-group">
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
            </div>

            <div className="form-group">
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" required />
            </div>

            <div className="form-group">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message *" required rows="6" />
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending...'}>
              {status === 'sending...' ? 'Sending...' : 'Send Message'}
            </button>

            {status && <div className="status-message">{status}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
