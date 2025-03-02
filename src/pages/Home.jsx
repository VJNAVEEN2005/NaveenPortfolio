import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Skills from './Skills'
import Works from './Works'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Works/>
      
    </div>
  )
}

export default Home