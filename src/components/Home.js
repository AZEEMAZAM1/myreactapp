import React from 'react';
import './Home.css';

function Home() {
  const projects = [
    { 
      title: 'Meals To Do', 
      description: 'A meal planning app to organize your daily meals efficiently.', 
      image: '/images/meals-to-do.jpg',
      link: 'https://github.com/AZEEMAZAM1/MealsToGo.git'
    },
    { 
      title: 'Crypto Tracker', 
      description: 'Track cryptocurrency prices and market trends in real-time.', 
      image: '/images/crypto-tracker.jpg',
      link: 'https://github.com/AZEEMAZAM1/tracking-app.git'
    },
    { 
      title: 'Flutec', 
      description: 'A tech startup website showcasing innovative solutions.', 
      image: '/images/flutec.jpg',
      link: 'https://github.com/AZEEMAZAM1/ecommerce.git'
    },
    { 
      title: 'BookDetail-UI', 
      description: 'A user interface for browsing and managing book details.', 
      image: '/images/bookdetail-ui.jpg',
      link: 'https://github.com/AZEEMAZAM1/BookDetail-User-Interface.git'
    },
    { 
      title: 'Ecommerce', 
      description: 'An online shopping platform with a seamless user experience.', 
      image: '/images/ecommerce.jpg',
      link: 'https://github.com/AZEEMAZAM1/ecommerce.git'
    },
    { 
      title: 'Unichat Course', 
      description: 'A chat application designed for online course discussions.', 
      image: '/images/unichat-course.jpg',
      link: 'https://github.com/AZEEMAZAM1/unichat-course.git'
    },
    { 
      title: 'Weather Wizard', 
      description: 'A weather forecasting app with real-time updates.', 
      image: '/images/weather-wizard.jpg',
      link: '#'
    },
    { 
      title: 'Fitness Tracker', 
      description: 'An app to track your fitness goals and activities.', 
      image: '/images/fitness-tracker.jpg',
      link: '#'
    },
    { 
      title: 'Travel Buddy', 
      description: 'A travel planning app to organize your trips.', 
      image: '/images/travel-buddy.jpg',
      link: '#'
    },
    { 
      title: 'Recipe Finder', 
      description: 'Find recipes based on ingredients you have.', 
      image: '/images/recipe-finder.jpg',
      link: '#'
    },
    { 
      title: 'Expense Manager', 
      description: 'An app to manage your daily expenses efficiently.', 
      image: '/images/expense-manager.jpg',
      link: '#'
    },
    { 
      title: 'Language Learner', 
      description: 'An app to help you learn new languages interactively.', 
      image: '/images/language-learner.jpg',
      link: '#'
    },
  ];

  return (
    <div className="home">
      <div className="navbar">
        <div className="profile-container">
          <img src="/images/profile.jpg" alt="Profile" className="profile-pic" />
          <span className="profile-name">Your Name</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="welcome-section">
        <h1>Welcome to My Portfolio</h1>
      </div>
      <div className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
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
    </div>
  );
}

export default Home;