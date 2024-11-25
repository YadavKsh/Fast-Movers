// Footer.js
import React from 'react';
import './Footer.css';
import officeImage from './officeImage.png'; // Update the path to your image

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Phone: +91-1234567890</p>
          <p>Email: contact@fastandeasymovers.com</p>
          <p>Office: 123, Business Street, New Delhi, India</p>
        </div>
        <div className="footer-image">
          <img src={officeImage} alt="Office" />
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Fast & Easy Movers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
