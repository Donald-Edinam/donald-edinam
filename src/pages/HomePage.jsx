import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutME'
import WorkTools from '../components/WorkTools'
import Projects from '../components/Projects'
import Quote from '../components/Quote'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
        <Hero />
        <AboutMe />
        <WorkTools />
        <Projects />
        <Quote />
        <Contact />
    </>
  )
}

export default HomePage