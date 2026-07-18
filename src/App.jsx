/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import Footer from './layout/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-w-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
