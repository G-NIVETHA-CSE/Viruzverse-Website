import React from 'react';
import '../stylefiles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We craft responsive and engaging websites to establish your online presence.',
    },
    {
      title: 'Mobile App Development',
      description: 'Our team develops user-friendly mobile applications for both Android and iOS platforms.',
    },
    {
      title: 'Digital Marketing',
      description: 'We offer comprehensive digital marketing strategies to enhance your brand visibility.',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Our e-commerce platforms are designed to provide seamless shopping experiences.',
    },
    {
      title: 'Cloud Services',
      description: 'We provide scalable cloud solutions to optimize your business operations.',
    },
    {
      title: 'VR Services',
      description: 'We create immersive virtual reality experiences for various industries and applications.',
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
