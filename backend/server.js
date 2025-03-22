const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000", // Allow only your frontend to access
  credentials: true,
}));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    let info = await transporter.sendMail({
      from: '"Viruzverse Support" <contact@viruzverse.tech>',
      to: "recipient@example.com", // Change to your recipient email
      subject: subject,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    console.log("Email sent: ", info.messageId);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});