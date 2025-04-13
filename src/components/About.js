import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="navbar">
        <img src="/images/profile-pic.jpg" alt="Profile" className="profile-pic" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="about-section">
        <h1>About Me</h1>
        <p>
          I am a skilled React Native developer with extensive experience in building cross-platform mobile applications. 
          I have worked on various projects that involve creating seamless user interfaces, integrating APIs, and managing backend services.
        </p>
        <p>
          My expertise includes:
        </p>
        <ul>
          <li>Developing mobile applications using React Native.</li>
          <li>Integrating RESTful APIs and GraphQL for dynamic data handling.</li>
          <li>Implementing state management using Redux and Context API.</li>
          <li>Building secure and scalable backend systems using Node.js and Firebase.</li>
          <li>Optimizing app performance and ensuring a smooth user experience.</li>
        </ul>
        <p>
          I am passionate about creating high-quality applications that solve real-world problems and provide value to users.
        </p>
      </div>
    </div>
  );
}

export default About;