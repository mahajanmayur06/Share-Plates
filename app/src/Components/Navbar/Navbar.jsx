// Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  

  return (
    <div className='Navbar'>
      <div className='NavContainer'>
        <div className='NavHead'>
          <div className='Logo'>LOGO</div>
          <div className='Title'>SharePlate</div>
        </div>
        <div className='ElemContainer'>
          <div className='NavLink'>
            <Link className='linked' to='/'>Home</Link>
          </div>
          <div className='NavLink'>
            <Link className='linked' to='/community'>Communities</Link> 
          </div>

          <div className='NavLink'>
            <Link className='linked' to='/volunteers'>Volunteers</Link>
          </div>
         
          <div className='NavLink'>
          <Link className='linked' to='/distributors'>Distributors</Link>
          </div>
           
          
          <div className='NavLink'>
            <Link className='linked' to='/donate'>Donate</Link>
          </div>

          <div className='NavLink'>
            <Link className='linked' to='/aboutus'>About US</Link>
          </div>
          <div className='NavLink'>
            <Link className='linked' to='/contactus'>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;