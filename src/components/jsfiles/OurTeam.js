import React from "react";
import "../stylefiles/OurTeam.css";
import teamMembers from "./teamData"; // Assuming you have team data in a separate file

const OurTeam = () => {
  return (
    <>
      <div className="our-team-container">
        <h1>Meet Our Team</h1>
        <p className="team-intro">
          Our team consists of experienced professionals who are dedicated to
          innovation and excellence. Meet the people behind our success!
        </p>

        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.photo} alt={member.name} className="team-photo" />
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p className="team-experience">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
