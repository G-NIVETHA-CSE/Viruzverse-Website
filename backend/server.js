require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// app.use(
//   cors({
//     origin: "https://your-frontend-domain.com", 
//     methods: "GET,POST",
//     credentials: true,
//   })
// );


// ✅ Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.GMAIL_EMAIL, // Your official email (e.g., viruzverse@gmail.com)
    pass: process.env.GMAIL_PASSWORD, // App Password (not your direct Gmail password)
  },
});

// ✅ Contact Page - Send Email Route
app.post("/send-email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_EMAIL}>`, // Gmail forces authentication email
    replyTo: email, // Replies go to the user
    to: "viruzversesolution@gmail.com", // Official email
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "❌ Failed to send email." });
  }
});

// ✅ Career Page - Job Application Route
app.post("/apply-job", async (req, res) => {
  const { name, email, message, github, linkedin, resume, jobTitle } = req.body;

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_EMAIL}>`,
    replyTo: email,
    to: "viruzversesolution@gmail.com",
    subject: `Job Application for ${jobTitle}`,
    text: `Name: ${name}\nEmail: ${email}\n\nJob Title: ${jobTitle}\nGitHub: ${github}\nLinkedIn: ${linkedin}\nResume: ${resume}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "✅ Job application submitted successfully!" });
  } catch (error) {
    console.error("❌ Error sending job application:", error);
    res.status(500).json({ success: false, message: "❌ Failed to send job application." });
  }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
