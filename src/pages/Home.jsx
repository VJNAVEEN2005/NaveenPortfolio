import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Skills from './Skills'
import Works from './Works'
import Contact from './Contact'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Works/>
        <Contact/>
      
    </div>
  )
}

export default Home