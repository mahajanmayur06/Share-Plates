import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    gsap.from('.NavHead', { duration: 3, opacity: 0, ease: "power3.out" });
    gsap.from('.NavLink', {
      duration: 1,
      opacity: 0,
      y: -30,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

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
            <Link className='linked' to='/aboutus'>About US</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;