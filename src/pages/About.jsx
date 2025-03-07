import React from 'react'
 import about from '../assets/about.jpg'; 
import './About.css'
export default function About() {
  return (
    <div class="about">
     <img src={about} alt="about" />

     <div class="para2">
      <h1 className='about'>About Us</h1>
        <p>
        At Black Todd, we believe in the power of simplicity. Inspired by the timeless appeal of black, our brand is built on the idea that style doesn't have to be complicated.</p>
    </div> 
    </div>


      

  )
}
