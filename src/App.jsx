import React from 'react'
import './index.css'
import MainLayout from './layout/MainLayout'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <MainLayout>
      <div className="p-4">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </MainLayout>
  )
}

export default App
