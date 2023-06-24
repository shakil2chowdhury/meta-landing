import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Seamless Assistance',
    text: 'Our chatbot\'s specialty lies in providing seamless assistance, effortlessly guiding users through their queries. With advanced natural language processing capabilities, it understands and responds to inquiries with utmost precision and clarity.'
  },
  {
    title: 'Multilingual Proficiency',
    text: 'Break language barriers with our multilingual chatbot. MetaConvo showcases remarkable proficiency in multiple languages, catering to a diverse range of users.'
  },
  {
    title: 'Continuous Learning',
    text: 'Driven by advanced machine learning techniques, MetaConvo is constantly evolving and expanding its knowledge.'
  },
  {
    title: 'Proactive Assistance',
    text: 'MetaConvo takes a proactive approach to support, anticipating user needs and offering assistance before they even ask.'
  }

]

function Features() {
  return (
    <div className='gpt__features section__padding' id="features">
      <div className='gpt__features-heading'>
        <h1 className='gradient__text'>Unleash Success: Empower Your Business with AI-Powered Chatbots. Automation With AI Will Boost Your Business.</h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className='gpt__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features