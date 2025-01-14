import React, { useState } from 'react';
import axios from 'axios';
// import './ResReg.css';
import Chatgpt from '../SignUp/chatgpt';

function RestaurantForm() {
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
    const data = {
      name: formData.name,
      location: formData.location,
      quantity: formData.quantity,
      expiryDate: formData.expiryDate
    };
    try {
      const response = await axios.post('http://localhost:3500/register-restaurant', data);
      console.log('sending data', response.data);
      console.log(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RestaurantForm;