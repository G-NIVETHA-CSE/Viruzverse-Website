import React from 'react';
import '../stylefiles/Products.css';

const Products = () => {
  const products = [
    {
      title: '📊 ERP & CRM Systems',
      description:
        'Tailored for supermarkets, hospitals, schools, and malls to efficiently manage operations.',
      details: [
        'Supermarkets – Inventory, billing, and customer management.',
        'Hospitals – Patient records, appointments, and billing automation.',
        'Schools & Colleges – Student management, attendance, and fee tracking.',
        'Malls – Tenant management, sales tracking, and reporting.',
      ],
    },
    {
      title: '🧾 Billing Systems',
      description:
        'Automated invoicing solutions to simplify transactions and enhance financial accuracy.',
      details: [
        'Fast & Secure Billing – Reduce manual effort with automated calculations.',
        'Multi-Payment Support – Accept payments via cash, cards, and UPI.',
        'Tax & Discount Management – Auto-apply GST, discounts, and offers.',
        'Detailed Reporting – Generate real-time sales and financial reports.',
      ],
    },
    {
      title: '📅 Appointment & Booking Systems',
      description:
        'Streamline scheduling for hospitals and service providers with automated booking, reminders and customer management.',
      details: [
        'Online Appointment Booking – Allow customers to book slots effortlessly.',
        'Automated Reminders – Reduce no-shows with SMS and email alerts.',
        'Multi-Platform Integration – Sync with websites, mobile apps, and calendars.',
        'Customer Management – Maintain client records, history, and preferences.',
      ],
    },
    {
      title: '🛒 E-Commerce Solutions',
      description:
        'Custom-built e-commerce platforms with secure payment gateways, order management, and inventory tracking for online businesses.',
      details: [
        'Secure Payment Integration – Support for cards, UPI, and digital wallets.',
        'Advanced Order Management – Track, process, and fulfill orders efficiently.',
        'Real-Time Inventory Tracking – Prevent stockouts with automated updates.',
        'SEO & Marketing Tools – Boost visibility with built-in SEO and promotions.',
      ],
    },
    {
      title: '📚 Learning Management System (LMS)',
      description:
        'A digital platform for educational institutions and training centers to manage courses, students, and online learning resources.',
      details: [
        'Course Management – Create, organize, and deliver courses seamlessly.',
        'Student Tracking – Monitor progress, attendance, and performance.',
        'Online Assessments – Conduct quizzes, exams, and assignments digitally.',
        'Interactive Learning – Enable discussions, forums, and multimedia integration.',
      ],
    },
    {
      title: '🎫 Customer Support & Ticketing System',
      description:
        'A centralized system to manage customer inquiries, track support tickets, and improve response times.',
      details: [
        'Ticket Management – Log, prioritize, and resolve customer issues efficiently.',
        'Automated Responses – Reduce response time with AI-driven chatbots and auto-replies.',
        'Multi-Channel Support – Handle queries from email, chat, and social media in one place.',
        'Analytics & Reports – Gain insights into customer interactions and support performance.',
      ],
    },       
  ];

  return (
    <div className="products-container">
      <section className="products-content">
        <div className="products-heading">
          <h1>Our Products</h1>
        </div>

        <div className="products-list">
          {products.map((product, index) => (
            <div className="product-box" key={index}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <ul>
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
