import React, { useState } from "react";
import "../stylefiles/Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (data.success) {
        alert("✅ Email sent successfully!");
      } else {
        alert("❌ Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("❌ Something went wrong.");
    }
  };
  
  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">🚀 Let's Connect & Create Something Amazing! 🌟</h1>

      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Information</h2>
          <p>We'd love to hear from you! Reach out via phone, email, or visit us.</p>

          <div className="contact-info">
            <div className="info-item">
              <FaPhone className="info-icon" />
              <p>+91 9659008000</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>contact@viruzverse.tech</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>Tamilnadu, India</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required />
            </div>

            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email *" required />
            </div>

            <div className="form-group">
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number (Optional)" />
            </div>

            <div className="form-group">
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" required />
            </div>

            <div className="form-group">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message *" required rows="6" />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
