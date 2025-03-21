const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Ensure environment variables are loaded correctly
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.SMTP_HOST) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail", // Use "gmail" for Gmail accounts
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or App Password
  },
});

// Email API Route
app.post("/api/send-email", async (req, res) => {
  console.log("Received email request:", req.body); // Debug log

  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Zoho Mail as sender
      replyTo: email, // Set user's email as reply-to
      to: process.env.EMAIL_USER, // Your Zoho email
      subject: `New Contact Form Submission: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    console.log("Email sent:", info.response); // Debug log
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
