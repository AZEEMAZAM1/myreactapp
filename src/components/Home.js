import React from 'react';
import './Home.css';

function Home() {
  const reactNativeProjects = [
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
  ];

  const flutterProjects = [
    { 
      title: 'Flutter Project 1', 
      description: 'A sample Flutter project.', 
      image: '/images/flutter-project1.jpg',
      link: '#'
    },
    { 
      title: 'Flutter Project 2', 
      description: 'Another sample Flutter project.', 
      image: '/images/flutter-project2.jpg',
      link: '#'
    },
  ];

  const xamarinProjects = [
    { 
      title: 'Xamarin Project 1', 
      description: 'A sample Xamarin project.', 
      image: '/images/xamarin-project1.jpg',
      link: '#'
    },
  ];

  return (
    <div className="home">
      <div className="navbar">
        <img src="/images/profile-pic.jpg" alt="Profile" className="profile-pic" />
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
        <div className="major-cards">
          <div className="major-card">
            <h2>React Native Projects</h2>
            <div className="projects-grid">
              {reactNativeProjects.map((project, index) => (
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
          <div className="major-card">
            <h2>Flutter Projects</h2>
            <div className="projects-grid">
              {flutterProjects.map((project, index) => (
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
        <div className="major-card">
          <h2>Xamarin Projects</h2>
          <div className="projects-grid">
            {xamarinProjects.map((project, index) => (
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
    </div>
  );
}

export default Home;