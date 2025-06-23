import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import './Community.css';

const Community = () => {
  const [coordinates, setCoordinates] = useState([null, null]);
  const [ngos, setNgos] = useState(null);
  const [selectedNgo, setSelectedNgo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    quantity: '',
    expiryDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const locationOptions = {
      method: 'GET',
      url: 'https://maps-data.p.rapidapi.com/geocoding.php',
      params: {
        query: formData.location,
        lang: 'en',
        country: 'ind'
      },
      headers: {
        'x-rapidapi-key': 'e215c42899msh486446cdc707906p13c6d5jsn8032c994fa6d',
        'x-rapidapi-host': 'maps-data.p.rapidapi.com'
      }
    };

    try {
      const locationResponse = await axios.request(locationOptions);
      const { lat, lng } = locationResponse.data.data;
      setCoordinates([lat, lng]);

      const nearbyNGOsOptions = {
        method: 'GET',
        url: 'https://maps-data.p.rapidapi.com/nearby.php',
        params: {
          query: 'NGO',
          lat: lat,
          lng: lng,
          limit: '5',
          country: 'ind',
          lang: 'en',
          offset: '0',
          zoom: '12'
        },
        headers: {
          'x-rapidapi-key': '84649a33bemsh89067bd4af0ca65p1ab404jsnb6641d742154',
          'x-rapidapi-host': 'maps-data.p.rapidapi.com'
        }
      };

      const nearbyNGOsResponse = await axios.request(nearbyNGOsOptions);
      setNgos(nearbyNGOsResponse.data.data);

      // Reset form
      setFormData({
        name: '',
        location: '',
        quantity: '',
        expiryDate: ''
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNgoClick = (ngo) => {
    setSelectedNgo(ngo);
  };

  const closePopup = () => {
    setSelectedNgo(null);
  };

  return (
    <div className='community-container'>
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo-section">
            <div className="logo-icon">
              <span>E</span>
            </div>
            <span className="logo-text">Enthusiasts</span>
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

      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="page-title">
            <span className="gradient-text">Gratitude in Action</span>
          </h1>
          <div className="title-underline"></div>
          <p className="intro-text">
            Extending heartfelt thanks to restaurants, caterers, and grocery stores for nourishing communities in need through our platform. 
            Amidst the challenges faced by many, our platform stands as a beacon of hope and generosity.
          </p>
          <p className="sub-intro-text">
            We extend our deepest appreciation to the restaurants, caterers, grocery stores and many individuals whose unwavering 
            support and donations have fueled our mission of providing nourishment to those in need. 
            Together, we are making a tangible difference in the lives of many, one meal at a time.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='main-content'>
        <div className="content-grid">
          {/* Form Section */}
          <div className="form-container">
            <div className="glass-card">
              <div className="card-header">
                <div className="icon-container">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h2>Donate Food</h2>
                <p>Share your surplus food with those who need it most</p>
              </div>
              
              <form className='donation-form' onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name">
                    <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your name"
                    required 
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="location">
                    <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                  </label>
                  <input 
                    type="text" 
                    id="location"
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    placeholder="Enter your city or area"
                    required 
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="quantity">
                    <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Quantity (servings)
                  </label>
                  <input 
                    type="number" 
                    id="quantity"
                    name="quantity" 
                    value={formData.quantity} 
                    onChange={handleChange} 
                    placeholder="Number of servings"
                    required 
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="expiryDate">
                    <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Best Before Date
                  </label>
                  <input 
                    type="date" 
                    id="expiryDate"
                    name="expiryDate" 
                    value={formData.expiryDate} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <button type="submit" className="submit-button" disabled={isLoading}>
                  {isLoading ? "Finding NGOs..." : "Find Nearby NGOs"}
                </button>
              </form>
            </div>
          </div>

          {/* Information Section */}
          <div className="info-section">
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3>How It Works</h3>
                <p>Simple steps to make a difference</p>
                <div className="steps">
                  <div className="step">
                    <span className="step-number">1</span>
                    <p>Fill out the donation form with your details</p>
                  </div>
                  <div className="step">
                    <span className="step-number">2</span>
                    <p>We find verified NGOs in your area</p>
                  </div>
                  <div className="step">
                    <span className="step-number">3</span>
                    <p>Connect directly with NGOs for pickup</p>
                  </div>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-grid">
                  <div className="stat">
                    <div className="stat-number green">500+</div>
                    <div className="stat-label">Partner NGOs</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number blue">10M+</div>
                    <div className="stat-label">Meals Distributed</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number red">50+</div>
                    <div className="stat-label">Cities Covered</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number purple">1000+</div>
                    <div className="stat-label">Daily Donors</div>
                  </div>
                </div>
              </div>

              <div className="verification-card">
                <div className="verification-header">
                  <svg className="verification-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h4>Verified Partners</h4>
                </div>
                <p>All our partner NGOs are verified and have a proven track record of community service. Your donations are handled by trusted organizations making real impact.</p>
              </div>
            </div>
          </div>
        </div>

        {/* NGOs Results Section */}
        {ngos && (
          <div className="ngos-section">
            <div className="glass-card">
              <div className="section-header">
                <h2>NGOs Near {formData.location || 'Your Location'}</h2>
                <p>Found {ngos.length} organizations ready to help</p>
              </div>
              
              <div className='ngos-grid'>
                {ngos.map((ngo, index) => (
                  <div key={index} className='ngo-card' onClick={() => handleNgoClick(ngo)}>
                    <div className="ngo-header">
                      <h3>{ngo.name}</h3>
                      {ngo.rating && (
                        <div className="rating">
                          <svg className="star-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                          <span>{ngo.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    {ngo.description && Array.isArray(ngo.description) && (
                      <p className="ngo-description">{ngo.description.join(", ")}</p>
                    )}
                    
                    {ngo.full_address && (
                      <div className="address">
                        <svg className="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{ngo.full_address}</span>
                      </div>
                    )}

                    <div className="ngo-footer">
                      {ngo.types && Array.isArray(ngo.types) && (
                        <div className="tags">
                          {ngo.types.slice(0, 2).map((type, i) => (
                            <span key={i} className="tag">{type}</span>
                          ))}
                          {ngo.types.length > 2 && (
                            <span className="tag">+{ngo.types.length - 2} more</span>
                          )}
                        </div>
                      )}
                      <button className="connect-button">Connect</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* POPUP */}
      {selectedNgo && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <div className="popup-title-section">
                <div className="popup-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h2>{selectedNgo.name}</h2>
                  {selectedNgo.rating && selectedNgo.review_count && (
                    <div className="popup-rating">
                      <svg className="star-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                      <span>{selectedNgo.rating} ({selectedNgo.review_count} reviews)</span>
                    </div>
                  )}
                </div>
              </div>
              <button className='close-btn' onClick={closePopup}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="popup-content">
              {selectedNgo.description && Array.isArray(selectedNgo.description) && selectedNgo.description.length > 0 && (
                <div className="popup-section">
                  <h4>About</h4>
                  <p>{selectedNgo.description.join(", ")}</p>
                </div>
              )}

              <div className="popup-details">
                {selectedNgo.full_address && (
                  <div className="detail-item">
                    <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <strong>Address</strong>
                      <p>{selectedNgo.full_address}</p>
                    </div>
                  </div>
                )}

                {selectedNgo.phone_number && (
                  <div className="detail-item">
                    <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <strong>Phone</strong>
                      <p>{selectedNgo.phone_number}</p>
                    </div>
                  </div>
                )}

                {selectedNgo.city && (
                  <div className="detail-item">
                    <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <strong>City</strong>
                      <p>{selectedNgo.city}</p>
                    </div>
                  </div>
                )}

                {selectedNgo.state && (
                  <div className="detail-item">
                    <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong>Status</strong>
                      <p>{selectedNgo.state}</p>
                    </div>
                  </div>
                )}
              </div>

              {selectedNgo.types && Array.isArray(selectedNgo.types) && selectedNgo.types.length > 0 && (
                <div className="popup-section">
                  <h4>Services</h4>
                  <div className="services-tags">
                    {selectedNgo.types.map((type, i) => (
                      <span key={i} className="service-tag">{type}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="popup-actions">
                <button className="action-button primary">
                  <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Connect & Donate
                </button>
                
                {selectedNgo.website && (
                  <a href={selectedNgo.website} target='_blank' rel='noopener noreferrer' className="action-button secondary">
                    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Website
                  </a>
                )}
                
                {selectedNgo.place_link && (
                  <a href={selectedNgo.place_link} target='_blank' rel='noopener noreferrer' className="action-button secondary">
                    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    View on Map
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;