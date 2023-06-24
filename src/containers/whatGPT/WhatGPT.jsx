import React from 'react'
import { Feature } from '../../components/'
import './whatgpt.css'

function WhatGPT() {
  return (
    <div className='gpt__whatGPT section__margin' id="whatGpt">
      <div className='gpt__whatGPT-feature'>
        <Feature title="What is GPT-3.5?" text="Ignite your business with our innovative prowess. Soar above competition, reaching new heights. Prepare for exponential growth and success." />
      </div>
      <div className='gpt__whatGPT-heading'>
        <h1 className='gradient__text'>Boundless potential, imagination knows no limits.</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt__whatGPT-container'>
        <Feature title="Chatbots" text="Experience the power of automation as our innovative chatbots revolutionize your business. Say goodbye to manual tasks and hello to seamless efficiency." />
        <Feature title="Knowledgebase" text="Ignite your business with our innovative prowess. Soar above competition, reaching new heights. Prepare for exponential growth and success." />
        <Feature title="Education" text="Explore a diverse array of courses, tutorials, and insightful materials crafted by experts in their fields. Unleash your potential, acquire new skills, and embrace the joy of lifelong learning."/>
      </div>
    </div>
  )
}

export default WhatGPT