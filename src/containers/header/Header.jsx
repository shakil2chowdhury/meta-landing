import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className='gpt__header-content'>
        <h1 className='gradient__text'>Lets Invent Something New With OpenAi GPT Model</h1>
        <p>In the realm of boundless imagination, where creativity meets the infinite, we ignite a symphony of innovation. 
          Guided by the ethereal whispers of the OpenAI GPT model, we delve into uncharted territories of invention. 
          Step into our realm, where invention knows no limits, and witness the birth of visionary masterpieces.</p>
        <div className='gpt__header-content__input'>
            <input type='email' placeholder='Your Email Here' />
            <button type='button'>Get Started</button>
        </div>
        <div className='gpt__header-content__people'>
          <img src={people} alt='people' />
          <p>2100 People requested to access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt__header-image'>
          <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header
