import React from 'react';
import './Projects.css';

function Projects() {
  const projectData = [
    {
      title: 'Weather Wizard',
      description: 'A weather forecasting app with real-time updates.',
      image: 'https://via.placeholder.com/300x200.png?text=Weather+Wizard',
      link: 'https://example.com/weather-wizard',
    },
    {
      title: 'Fitness Tracker',
      description: 'An app to track your fitness goals and activities.',
      image: 'https://via.placeholder.com/300x200.png?text=Fitness+Tracker',
      link: 'https://example.com/fitness-tracker',
    },
  ];

  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-message">
        We are working on these projects and will be back soon. Thank you!
      </p>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            key={index}
          >
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;