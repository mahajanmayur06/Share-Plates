import React, { useState } from 'react';
import './Volunteer.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    role: '', // Initialize role state
    contactNumber: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      location: formData.location,
      role: formData.role, // Include role in the data
      contactNumber: formData.contactNumber,
    };
    try {
      const response = await axios.post('http://localhost:3500/register-volunteer', data);
      console.log('Sending data:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
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
    <div className='volunteers'>
      <div className='node new'>
        <h2>Want to join the fight against hunger?</h2>
        <div>
          <ul id='animatedList'>
            <li>Join us in our mission to combat food waste and hunger.</li>
            <li>Donate your surplus food through our innovative web application.</li>
            <li>With just a few clicks, you can make a significant impact on the lives of those in need.</li>
            <li>Reduce environmental impact by ensuring perfectly good food reaches hungry mouths instead of ending up in landfills.</li>
            <li>Create a brighter future where everyone has access to nutritious meals.</li>
            <li>Donate today and be a part of the solution!</li>
          </ul>
        </div>
      </div>
      <div className='node'>
        <form className='form' onSubmit={handleSubmit}>
          <h2>Join Us</h2>
          
          <label>
            <input
              className='input'
              type='text'
              placeholder=' '
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <span>Full Name</span>
          </label>

          <label>
            <input
              className='input'
              type='email'
              placeholder=' '
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <span>Email Address</span>
          </label>

          <label>
            <input
              className='input'
              type='text'
              placeholder=' '
              name='location'
              value={formData.location}
              onChange={handleChange}
              required
              autoComplete="address-level2"
            />
            <span>Location</span>
          </label>

          <label>
            <select
              className='input'
              name='role'
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value=''>Choose your preferred role</option>
              <option value='Sorting'>Food Sorting</option>
              <option value='Packing'>Food Packing</option>
              <option value='Distribution'>Food Distribution</option>
            </select>
            <span>Volunteer Role</span>
          </label>

          <label>
            <input
              className='input'
              type='tel'
              placeholder=' '
              name='contactNumber'
              value={formData.contactNumber}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
            <span>Contact Number</span>
          </label>

          <button 
            className={`submit ${isSubmitting ? 'loading' : ''}`} 
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? '' : 'Register as Volunteer'}
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Volunteer;
