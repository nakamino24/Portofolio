import './index.css'
import { ThemeProvider } from './shared/context/ThemeContext'
import MainLayout from './layout/MainLayout'
import Hero from './features/hero/Hero'
import Projects from './features/projects/Projects'
import Experience from './features/experience/Experience'
import Skills from './features/skills/Skills'
import Education from './features/education/Education'
import Certifications from './features/certifications/Certifications'
import Contact from './features/contact/Contact'

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
