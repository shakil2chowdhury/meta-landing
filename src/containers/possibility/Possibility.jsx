import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className='gpt__possibility section__padding' id="possibility">
      <div className='gpt__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt__possibility-content'>
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The Possibilities are Beyond your Imagination</h1>
        <p>Embrace the future today and witness its transformative power through our advanced chatbot automation. Accelerate your business with the limitless potential of AI, propelling growth and success.</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility