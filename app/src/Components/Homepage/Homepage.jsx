import React, { useState, useEffect } from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const sequences = [
    "surplus into suste nance",
    "waste into welfare",
    "hunger into hope"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isPaused ? 2000 : typeSpeed;

    const timeout = setTimeout(() => {
      const currentSequence = sequences[currentIndex];

      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(currentSequence.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % sequences.length);
        }
      } else {
        setCurrentText(currentSequence.substring(0, currentText.length + 1));

        if (currentText === currentSequence) {
          setIsPaused(true);
        }
      }
    }, pauseTime);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, isPaused]);

  return (
    <div className="welcome-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo-section">
            <span className="logo-text">Share-Plates</span>
          </div>
          <div className="nav-links">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/community'>Communities</Link>
                        <Link className='nav-link' to='/volunteers'>Volunteers</Link>
                        <Link className='nav-link' to='/distributors'>Distributors</Link>
                        <Link className='nav-link' to='/aboutus'>About US</Link>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="background-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="welcome-header">
              <h1 className="main-title">
                Welcome{' '}
                <span className="gradient-text">Enthusiasts</span>
              </h1>
              <div className="title-underline"></div>
            </div>

            <div className="animated-section">
              <div className="static-text">
                <span>Let's Turn</span>
              </div>
              <div className="typing-container">
                <span className="typing-text">
                  {currentText}
                  <span className="cursor">|</span>
                </span>
              </div>
            </div>

            <div className="cta-section">
              <div className="glass-card">
                <p className="description">
                  Join us in transforming communities through sustainable innovation. 
                  Together, we can create lasting impact and build a better tomorrow for all.
                </p>

                <div className="button-group">
                  <button className="cta-button primary large">
                    Start Your Journey
                  </button>
                  <button className="cta-button secondary large">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="stats-section">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number green">10M+</div>
                  <div className="stat-label">Meals Provided</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number blue">500K</div>
                  <div className="stat-label">Tons Recycled</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number red">1000+</div>
                  <div className="stat-label">Communities Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <h3 className="footer-title">Ready to Make an Impact?</h3>
          <p className="footer-description">
            Every action counts. Join thousands of enthusiasts who are already making a difference in their communities.
          </p>
          <button className="cta-button primary large">
            Join the Movement
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
