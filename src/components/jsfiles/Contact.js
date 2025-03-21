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

  const [status, setStatus] = useState("");

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Google Form URL
    const googleFormURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
    const googleFormData = new URLSearchParams({
      "entry.123456789": formData.name, // Replace with actual field IDs
      "entry.987654321": formData.email,
      "entry.543210987": formData.phone,
      "entry.678901234": formData.subject,
      "entry.135792468": formData.message,
    });

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData,
      });

      // ✅ Redirect to WhatsApp after successful submission
      sendToWhatsApp();
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  // ✅ Send Message to WhatsApp
  const sendToWhatsApp = () => {
    const whatsappNumber = "919659008000"; // Your WhatsApp number (without +)
    const message = encodeURIComponent(`
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `);

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">🚀 Let's Connect & Create Something Amazing! 🌟</h1>
      <p className="contact-subheading">
        Have a project in mind? Need help? We're just a message away! 💬
      </p>

      <div className="contact-container">
        {/* Left Section */}
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

        {/* Right Section - Contact Form */}
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
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

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (Optional)"
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

            <button type="submit" className="submit-btn" disabled={status === "Sending..."}>
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <div className="status-message" role="alert">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
