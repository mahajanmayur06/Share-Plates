import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    location: '',
    role: 'Distributing', // Default role
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
    console.log('Form data:', formData); // Add this line for debugging
    const data = {
        name: formData.name,
        contactNumber: formData.contactNumber,
        role: formData.role
    }
    try {
        const response = await axios.post('http://localhost:3500/register-volunteer', 
            data);
        console.log('Response:', response.data); // Log the response for debugging
        console.log('Sending data');
    } catch (error) {
        console.error('Error submitting form:', error); // Log any errors for debugging
    }
  };
  

  return (
    <div>
      <h2>NGO Volunteer Signup</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="role">Choose Your Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={(e) => handleChange(e)}
          >
            <option value="Sorting">Sorting</option>
            <option value="Packing">Packing</option>
            <option value="Distribution">Distribution</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
