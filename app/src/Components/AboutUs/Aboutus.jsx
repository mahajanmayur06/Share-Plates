import React from 'react'
import './Aboutus.css'
import { useState, useEffect } from 'react'
import pic1 from './image.png'
import pic2 from './image1.png'
import pic3 from './image2.png'
import pic4 from './image3.png'
const Aboutus = () => {
  const images = [pic1, pic2, pic3, pic4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='Main'>
      <div className='bee'>
        <div className='hello'>
          <h2>About US</h2>
          <h3 className='headers'>
            Connecting Communities Through Food
          </h3>
          <p className='content'>Welcome to SharePlates, where we believe in the power of food to unite communities and make a meaningful difference in the lives of those in need.

            Our platform serves as a bridge between NGOs and supply communities, fostering a symbiotic relationship where surplus food finds its way to those who need it the most. We are committed to facilitating the redistribution of excess food to the underserved.</p>
          <h3 className='headers'>
            Our Mission
          </h3>
          <p className='content'>
            At SharePlates, our mission is simple yet impactful: to alleviate hunger and reduce food waste by connecting generous restaurants with local NGOs dedicated to serving the community. We strive to create a seamless process where surplus food is redirected from restaurants to NGOs, and finally into the hands of individuals and families who are facing food insecurity.
          </p>
          <h3 className='headers'>How It Works</h3>
          <p className='content'>
          Easily connect NGOs and restaurants on our platform. Restaurants post surplus food details, NGOs receive real-time notifications, ensuring quick and efficient distribution to those in need.</p>

          <h3 className='headers'>The Heart of Our Operation: Volunteers</h3>
          <p className='content'>"Our dedicated volunteers, the unsung heroes, collect surplus food and deliver it to those in need. Their commitment and enthusiasm drive our mission forward, creating a ripple effect of compassion in our communities."</p>
         </div>

      </div>
      <div className='bee'>
        <div className='ImgDiv'>
          <img src={images[currentImageIndex]} className='sideImage' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Aboutus