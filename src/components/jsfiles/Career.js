import React, { useState } from "react";
import "../stylefiles/Career.css";

const Career = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    github: "",
    linkedin: "",
    resume: "",
  });

  const jobListings = [
    { title: "Software Engineer", location: "Coimbatore", description: "Develop and maintain our web applications." },
    { title: "Full Stack Developer", location: "Coimbatore", description: "Work on both frontend and backend development." },
    { title: "VR Developer", location: "Coimbatore", description: "Build immersive virtual reality experiences." },
    { title: "Social Media Manager", location: "Coimbatore",description: "Manage and grow our online presence." },
    { title: "Cloud Engineer", location: "Coimbatore", description: "Develop scalable cloud-based solutions." },
    { title: "UI/UX Developer", location: "Coimbatore", description: "Creating an user-friendly designs to enhance digital experiences across web and mobile platforms." },
  ];

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedJob("");
    setFormData({ name: "", email: "", message: "", github: "", linkedin: "", resume: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/apply-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        jobTitle: selectedJob,
      }),
    });

    const data = await response.json();
    if (data.success) {
      alert("✅ Job application submitted successfully!");
      handleCloseForm();
    } else {
      alert("❌ Failed to send application. Please try again.");
    }
  };

  return (
    <div className="career-container">
      <h1>Careers at VIRUZVERSE</h1>
      <p>Join our team and help shape the future!</p>
      <h2>Current Openings</h2>
      <div className="job-list">
        {jobListings.map((job, index) => (
          <div key={index} className="job-item">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <button onClick={() => handleApplyClick(job.title)}>Apply Now</button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={handleCloseForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Application Form - {selectedJob}</h2>
            <p>Fill in your details to apply.</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <input type="url" name="github" placeholder="GitHub Profile Link" value={formData.github} onChange={handleChange} required />
              <input type="url" name="linkedin" placeholder="LinkedIn Profile Link" value={formData.linkedin} onChange={handleChange} required />
              <input type="url" name="resume" placeholder="Resume Google Drive Link" value={formData.resume} onChange={handleChange} required />
              <textarea name="message" placeholder="Tell us why you're a good fit" value={formData.message} onChange={handleChange} required />
              <div className="button-group">
                <button type="button" onClick={handleCloseForm}>Close</button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
