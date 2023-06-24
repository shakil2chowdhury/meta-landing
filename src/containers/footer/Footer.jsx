import React from 'react'
import './footer.css'
import gptLogo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt__footer section__padding'>
      <div className='gpt__footer-heading'>
        <h1 className='gradient__text'>
          Step in the Future Before Others. Skyrocket your Business.
        </h1>
      </div>
      <div className='gpt__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt__footer-links'>
        <div className='gpt__footer-links_logo'>
          <img src={gptLogo} alt='logo' />
          <p>Sheridan, Wyoming, United States, All Rights Reserved</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Overview</p>
          <p>Consultation</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Sheridan, Wyoming, United States</p>
          <p>01916343662</p>
          <p>info@metalogybiz.com</p>
        </div>
      </div>
      <div className='gpt__footer-copyright'>
        <p> 2023 Metalogy. All Rights Reserved. </p>
      </div>
    </div>
  )
}

export default Footer