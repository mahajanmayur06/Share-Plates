import React, { useState } from 'react';
import axios from 'axios';
import Chatgpt from '../SignUp/chatgpt';
import './ResReg.css'

const MapsWithLocationAndForm = () => {
  const [coordinates, setCoordinates] = useState([null, null]);
  const [ngos, setNgos] = useState(null);

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
          lat: `${lat}`,
          lng: `${lng}`,
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
      // const nearbyNGOsResponse = nearbyNGOsResponse
      setNgos(nearbyNGOsResponse);

      // Clear form fields after submission
      setFormData({
        name: '',
        location: '',
        quantity: '',
        expiry: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Baap'>
      <p className='beta'>Gratitude in Action</p>
      <p className='baccha'>Extending Heartfelt Thanks to Restaurants, Caterers, and Grocery stores
        for Nourishing Communities in Need through Our Platform!"
        Amidst the challenges faced by many, our platform stands as a beacon of hope and generosity.
        We extend our deepest appreciation to the restaurants, caterers, grocery stores and many individuals
        whose unwavering
        support and donations have fueled our mission of providing nourishment to those in need.
        Together, we are making a tangible difference in
        the lives of many, one meal at a time.</p>
      <div className='NGOMain'>
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

        <div className='NgoContainer'>
          {ngos ? (
            <ul>
              {ngos.map((ngo, index) => (
                <li key={index}>{ngo.name}</li>
              ))}
            </ul>
          ) : (
            <p>No NGOs nearby.</p>
          )}
          {ngos && <Chatgpt formData={formData} />}
        </div>
      </div>
    </div>
  );
};

export default MapsWithLocationAndForm;
