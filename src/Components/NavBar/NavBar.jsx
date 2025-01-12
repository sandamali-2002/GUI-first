import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="nav-main-wrapper">
     
      <div className="nav-sub-wrappper">
      <div className='nav-item-wrapper'>
      <ul >
            <li><Link to="/">Home</Link></li>
            <li><Link to="http://localhost:5173/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div> 
      </div> 
    </nav>
  )
}
export default NavBar

