import React from 'react'
import './Contact.css'



  export default function Contact() {
  return (

    <div class="contact_page">
    <div class='contact'>
      <div class='contact_topic'>
      <p class='contact_para'>GET IN TOUCH</p>
      </div>
    </div>  
      
      <div class="contact_form">
      <div className="contact_details">
        <div className="contact_card">
          <h2>Contact number</h2>
          <p><strong>Phone:</strong> 0112 794 851</p>
        </div>

        <div className="contact_card">
          <h2>Location</h2>
          <p>J.40, MC Road,Matale</p>
        </div>

        <div className="contact_card">
          <h2>Email</h2>
          <p>blacktodd@gmail.com</p>
        </div>
      </div>

      <div className="contact_map">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31711.755922338576!2d80.61961647622045!3d7.468523813711868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae344b6aaf04f1f%3A0xe2f5ec99d946dd6b!2sMatale%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1691142437090!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      </div>
      
  )
}
