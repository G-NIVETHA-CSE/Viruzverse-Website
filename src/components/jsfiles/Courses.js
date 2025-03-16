import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../stylefiles/Courses.css';

const Courses = () => {
  const courses = [
    { title: '🚀 Mastering Web Development', description: 'Become a full-stack developer with HTML, CSS, JavaScript, React, and more!' },
    { title: '🤖 AI & Machine Learning', description: 'Explore deep learning, neural networks, and AI-driven solutions.' },
    { title: '📱 Mobile App Development', description: 'Learn to build cross-platform apps with Flutter & React Native.' },
    { title: '🔒 Cyber Security & Ethical Hacking', description: 'Protect digital assets and learn penetration testing techniques.' },
    { title: '☁️ Cloud Computing & DevOps', description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines.' },
    { title: '🎨 UI/UX Design & Prototyping', description: 'Create stunning user experiences with Figma, Adobe XD & UX principles.' },
  ];

  return (
    <div className="courses-container">
      <Header />
      
      <section className="courses-content">
        <div className="courses-heading">
          <h1>📚 Level Up Your Skills with Our Top Courses!</h1>
        </div>

        <div className="courses-list">
          {courses.map((course, index) => (
            <div className="course-box" key={index}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
