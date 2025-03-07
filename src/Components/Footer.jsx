import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax, FaSkype } from "react-icons/fa";



const Footer = () => {
    return (
      <footer className="footer">
        
  
        {/* Footer Main Section */}
        <div className="footer-main">
          {/* Office Section */}
          <div className="footer-column">
            <h3>Office</h3>
            <p><FaMapMarkerAlt /> J.40,MC Road, Matale</p>
            <p><FaPhone /> +94 (800) 333 44 55</p>
            <p><FaEnvelope /> newyork@gmail.com</p>
            <p><FaFax /> +1 (800) 333 99 88</p>
            <p><FaSkype /> @xtra_live</p>
          </div>
  
         
  
          {/* Shortcuts Section */}
          <div className="footer-column">
          <h3>Shortcuts</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
         
          <div className="footer-column">
          <h3>Working Hours</h3>
          <p>Our support is available 24/7.</p>
          <p>Monday to Friday: <strong>8AM - 4PM</strong></p>
          <p>Saturday: <strong>8AM - 1PM</strong></p>
        </div>
      </div>
          
  
  
      </footer>
    );
  };
  
  export default Footer;