import React from 'react';
import './Footer.css';
import logo from './logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row top-row">
        <div className="footer-column">
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </div>
        <div className="footer-column">
          <p>
            We collaborate successfully with organisations that share our values, have strong business acumen and are dedicated to implement the highest standards in the IT industry.
          </p>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contactUs">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-row bottom-row">
        <p>© 2024 All rights reserved for www.wavestaffing.com</p>
      </div>
    </footer>
  );
};

export default Footer;
