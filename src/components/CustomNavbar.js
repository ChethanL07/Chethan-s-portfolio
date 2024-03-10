// CustomNavbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import './CustomNavbar.css'; 

const CustomNavbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link className='NAVI' to='/'>Home</Link></li>
        <li><Link className='NAVI'to='/about'>About Me</Link></li>
        <li><Link className='NAVI'to='/skills'>Skills</Link></li>
        <li><Link className='NAVI'to='/studies'>Studies</Link></li>
        <li><Link className='NAVI'to='/projects'>Projects</Link></li>
      </ul>
    </nav>
  );
};

export default CustomNavbar;
