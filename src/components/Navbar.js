import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [quote, setQuote] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const quotes = [
      "Believe you can and you're halfway there.",
      "The only way to do great work is to love what you do.",
      "Success is not the key to happiness. Happiness is the key to success.",
      "Your limitation—it’s only your imagination.",
      "Dream it. Wish it. Do it.",
      "Stay positive, work hard, make it happen.",
      "Don’t stop when you’re tired. Stop when you’re done.",
    ];

    // Get the current date and use it to select a quote
    const today = new Date();
    const quoteIndex = today.getDate() % quotes.length; // Rotate quotes daily
    setQuote(`"${quotes[quoteIndex]}"`); // Add quotation marks around the quote

    // Update the time every second
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

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
      <div className="quote-container">
        <span className="time">{time}</span>
        <p className="quote">{quote}</p>
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