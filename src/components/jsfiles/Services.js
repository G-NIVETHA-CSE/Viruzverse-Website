import React from 'react';
import '../stylefiles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom, responsive, and SEO-friendly websites.',
    },
    {
      title: 'Digital Marketing Services',
      description: 'SEO, social media marketing, PPC, and branding strategies to grow your online presence.',
    },
    {
      title: 'ERP & CRM Development',
      description: 'Streamlining business operations with customized solutions.',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store development and integration.',
    },
    {
      title: 'Cloud Computing',
      description: 'Cloud-based solutions for scalability and efficiency.',
    },
    {
      title: 'IoT & Data Science',
      description: 'Smart solutions for data-driven decision-making.',
    },
    {
      title: 'UI/UX Design Services',
      description: 'Creative and user-friendly interface design to enhance user experience.',
    },
  ];
  return (
    <div className="services-container">
      <div className="services-content">
        <h1>Our Services</h1>
        <p>Explore the services we offer to help your business grow.</p>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
