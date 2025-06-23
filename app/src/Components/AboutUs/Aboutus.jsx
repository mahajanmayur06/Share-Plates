import React, { useState, useEffect } from 'react';
import './Aboutus.css';
import { Link } from 'react-router-dom';  
const Aboutus = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const images = [
    'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&h=400&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.about-animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '10,000+', label: 'Meals Distributed', icon: '🍽️' },
    { number: '500+', label: 'Partner Restaurants', icon: '🏪' },
    { number: '150+', label: 'Active NGOs', icon: '🤝' },
    { number: '1,000+', label: 'Volunteers', icon: '👥' }
  ];

  const features = [
    { title: 'Real-time Notifications', description: 'Instant alerts when surplus food becomes available', icon: '⚡' },
    { title: 'Smart Matching', description: 'AI-powered system connects the right NGOs with available food', icon: '🎯' },
    { title: 'Impact Tracking', description: 'Monitor your contribution and see the difference you make', icon: '📊' },
    { title: 'Community Network', description: 'Join a growing network of change-makers in your area', icon: '🌐' }
  ];

  return (
    <div className='about-container'>
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
      {/* Hero Section */}
      <section className='about-hero-section'>
        <div className='about-hero-content'>
          <div className='about-hero-text'>
            <h1 className='about-hero-title'>
              About <span className='about-highlight'>SharePlates</span>
            </h1>
            <p className='about-hero-subtitle'>Connecting Communities Through Food, Creating Hope Through Action</p>
            <div className='about-hero-cta'>
              <button className='about-cta-button primary'>Join Our Mission</button>
              <button className='about-cta-button secondary'>Learn More</button>
            </div>
          </div>
          <div className='about-hero-visual'>
            <div className='about-floating-elements'>
              <div className='about-float-element' style={{ '--delay': '0s' }}>🍎</div>
              <div className='about-float-element' style={{ '--delay': '1s' }}>🥖</div>
              <div className='about-float-element' style={{ '--delay': '2s' }}>🥗</div>
              <div className='about-float-element' style={{ '--delay': '3s' }}>🍊</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='about-stats-section'>
        <div className='about-stats-grid'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`about-stat-card about-animate-on-scroll ${isVisible[`stat-${index}`] ? 'visible' : ''}`}
              id={`stat-${index}`}
            >
              <div className='about-stat-icon'>{stat.icon}</div>
              <div className='about-stat-number'>{stat.number}</div>
              <div className='about-stat-label'>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Section */}
      <section className='about-main-content'>
        <div className='about-content-grid'>
          <div className='about-text-content'>
            <div
              className={`about-content-section about-animate-on-scroll ${isVisible['mission'] ? 'visible' : ''}`}
              id='mission'
            >
              <h2 className='about-section-title'>Our Mission</h2>
              <p className='about-section-text'>
                At SharePlates, our mission is to alleviate hunger and reduce food waste by connecting generous restaurants with NGOs. We create a seamless process from food surplus to feeding communities in need.
              </p>
            </div>

            <div
              className={`about-content-section about-animate-on-scroll ${isVisible['how-it-works'] ? 'visible' : ''}`}
              id='how-it-works'
            >
              <h2 className='about-section-title'>How It Works</h2>
              <div className='about-process-steps'>
                {["Restaurants Post", "NGOs Get Notified", "Volunteers Deliver"].map((step, i) => (
                  <div className='about-step' key={i}>
                    <div className='about-step-number'>{i + 1}</div>
                    <div className='about-step-content'>
                      <h3>{step}</h3>
                      <p>{[
                        "Restaurants post surplus food details",
                        "NGOs receive real-time alerts",
                        "Volunteers deliver the food"
                      ][i]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`about-content-section about-animate-on-scroll ${isVisible['volunteers'] ? 'visible' : ''}`}
              id='volunteers'
            >
              <h2 className='about-section-title'>The Heart of Our Operation: Volunteers</h2>
              <div className='about-volunteer-highlight'>
                <blockquote>
                  "Our dedicated volunteers collect surplus food and deliver it to those in need. Their enthusiasm drives our mission forward."
                </blockquote>
              </div>
            </div>
          </div>

          <div className='about-visual-content'>
            <div className='about-image-carousel'>
              <div className='about-carousel-container'>
                <img
                  src={images[currentImageIndex]}
                  alt="Community impact"
                  className='about-carousel-image'
                />
                <div className='about-carousel-overlay'>
                  <div className='about-carousel-text'>Making a difference, one meal at a time</div>
                </div>
              </div>
              <div className='about-carousel-navigation'>
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`about-nav-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='about-features-section'>
        <div className='about-features-header'>
          <h2 className='about-features-title'>Why Choose SharePlates?</h2>
          <p className='about-features-subtitle'>We blend technology with compassion to drive meaningful change</p>
        </div>
        <div className='about-features-grid'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`about-feature-card about-animate-on-scroll ${isVisible[`feature-${index}`] ? 'visible' : ''}`}
              id={`feature-${index}`}
            >
              <div className='about-feature-icon'>{feature.icon}</div>
              <h3 className='about-feature-title'>{feature.title}</h3>
              <p className='about-feature-description'>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='about-cta-section'>
        <div className='about-cta-content'>
          <h2 className='about-cta-title'>Ready to Make a Difference?</h2>
          <p className='about-cta-text'>Join restaurants, NGOs, and volunteers already making an impact</p>
          <div className='about-cta-buttons'>
            <button className='about-cta-button primary large'>Become a Volunteer</button>
            <button className='about-cta-button secondary large'>Partner With Us</button>
          </div>
        </div>
        <div className='about-cta-visual'>
          <div className='about-impact-circle'>
            <div className='about-impact-text'>
              <span className='about-impact-number'>Together</span>
              <span className='about-impact-label'>We Can End Hunger</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
