import React from 'react';
import '../stylefiles/Courses.css';

const Courses = () => {
  const courses = [
    { title: '🚀 Mastering Web Development', description: 'Become a full-stack developer with HTML, CSS, JavaScript, React, and more!' },
    { title: '🤖 AI & Machine Learning', description: 'Explore deep learning, neural networks, and AI-driven solutions.' },
    { title: '📱 Mobile App Development', description: 'Learn to build cross-platform apps with Flutter & React Native.' },
    { title: '🤖 Embedded IoT', description: 'Explore IoT systems, embedded programming, and real-time device communication.' },
    { title: '☁️ Cloud Computing & DevOps', description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines.' },
    { title: '🎨 UI/UX Design & Prototyping', description: 'Create stunning user experiences with Figma, Adobe XD & UX principles.' },
    { title: '🕶️ Virtual Reality Development', description: 'Create immersive VR experiences using Unity, Unreal Engine & WebXR.' },
    { title: '📊 Data Science & Analytics', description: 'Analyze big data, build predictive models & master visualization techniques.' },
    { title: '🎮 Game Development', description: 'Design and develop games using Unity, C#, and game mechanics.' },
  ];

  return (
    <div className="courses-container">
      
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

    </div>
  );
};

export default Courses;
