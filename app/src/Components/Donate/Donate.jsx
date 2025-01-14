import React, { useState } from 'react';
import './Donate.css';
import pic1 from './image.png'

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    role: '', // State for selected role
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation here before submitting
    // For now, we'll just log the data to the console
    console.log(formData);
    // You can also send this data to your backend for further processing
  };

  return (
    <div>
      <div className='Volu'>
        <div className='node'>̥
          <div className='details'>
            <h2>Want to join the fight against hunger?</h2>
            <p>
            Join us in our mission to combat food waste and hunger by donating your surplus food through our innovative web application. With just a few clicks, you can make a significant impact on the lives of those in need while also reducing environmental impact. Your contribution will ensure that perfectly good food reaches hungry mouths instead of ending up in landfills. Together, let's create a brighter future where everyone has access to nutritious meals. Donate today and be a part of the solution!
            </p>
          </div>
        </div>
        <div className='node'>
          <img src ={pic1} alt='QRCode'/>
        </div>
      </div>
    </div>
  );
};

export default Donate;
