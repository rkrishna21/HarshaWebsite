import React, { useState } from 'react';
import './CustomNavbar.css'; // Ensure this path matches your file structure
import Logo from './logo.jpg'; // Adjust the path to your logo file

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img
            src={Logo}
            alt="Company Logo"
            className="logo"
          />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/home" onClick={toggleMenu}>Home</a></li>
          <li><a href="/about-us" onClick={toggleMenu}>About Us</a></li>
          <li><a href="/services" onClick={toggleMenu}>Services</a></li>
          <li><a href="/contactUs" onClick={toggleMenu}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
