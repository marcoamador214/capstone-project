import React from 'react';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='app_navbar'>
      <div className='navbar_logo'>
        <img className='navbar_image' src={images.CalbearsFball} alt='logo'/>
      </div>
      <ul className='navbar_links'>
        <li className='p__opensans'><a href='#home'></a>Home</li>
        <li className='p__opensans'><a href='#about'></a>About</li>
        <li className='p__opensans'><a href='#menu'></a>Roster</li>
        <li className='p__opensans'><a href='#awards'></a>Schedule</li>
        <li className='p__opensans'><a href='#contact'></a>Contact</li>
      </ul>
      <div className='navbar_login'>
        <a href='#login' className='p__opensans'>Log In/Register</a>
      </div>
    </nav>
  )
}

export default Navbar;
