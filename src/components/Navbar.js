import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="profile-container">
        <a
          href="https://uk.linkedin.com/in/muhammad-azeem5?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <img src="/images/profile.jpg" alt="Profile" className="profile-pic" />
          <span className="profile-name">Muhammad Azeem</span>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;