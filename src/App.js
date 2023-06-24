import React from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT, Header } from './containers';
import { Cta, Feature, Navbar, Article, Brand } from './components';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="gradien__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App