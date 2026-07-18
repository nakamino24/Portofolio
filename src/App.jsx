/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import './index.css'
import { ThemeProvider } from './shared/context/ThemeContext'
import MainLayout from './layout/MainLayout'
import Hero from './features/hero/Hero'
import About from './features/about/About'
import Skills from './features/skills/Skills'
import Experience from './features/experience/Experience'
import Projects from './features/projects/Projects'
import Certifications from './features/certifications/Certifications'
import Contact from './features/contact/Contact'

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
