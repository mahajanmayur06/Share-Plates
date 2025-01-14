import React, { useState } from 'react';
import './Volunteer.css';
import axios from 'axios';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    role: '', // Initialize role state
    contactNumber: '',
  });

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
    <div className='volunteers'>
      <div className='node new'>
        <h2>Want to join the fight against hunger?</h2>
        <p>
          <ul id='animatedList'>
            <li>Join us in our mission to combat food waste and hunger.</li>
            <li>Donate your surplus food through our innovative web application.</li>
            <li>With just a few clicks, you can make a significant impact on the lives of those in need.</li>
            <li>Reduce environmental impact by ensuring perfectly good food reaches hungry mouths instead of ending up in landfills.</li>
            <li>Create a brighter future where everyone has access to nutritious meals.</li>
            <li>Donate today and be a part of the solution!</li>
          </ul>
        </p>
      </div>
      <div className='node'>
        <form className='form' onSubmit={handleSubmit}>
          <h2>Join Us</h2>
          <label>
            <input
              className='input'
              type='text'
              placeholder='Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span>Name</span>
          </label>

          <label>
            <input
              className='input'
              type='email'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span>Email</span>
          </label>

          <label>
            <input
              className='input'
              type='text'
              placeholder='Location'
              name='location'
              value={formData.location}
              onChange={handleChange}
              required
            />
            <span>Location</span>
          </label>

          <label>
            <select
              className='input'
              placeholder='Role'
              name='role'
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value=''>Select Role</option>
              <option value='Sorting'>Sorting</option>
              <option value='Packing'>Packing</option>
              <option value='Distribution'>Distribution</option>
            </select>
            <span>Role</span>
          </label>

          <label>
            <input
              className='input'
              type='text'
              placeholder='Contact Number'
              name='contactNumber'
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
            <span>Contact Number</span>
          </label>

          <button className='submit' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
