import { useEffect, useState } from 'react'
import { useTheme } from '../shared/hooks/useTheme.jsx'
import { cvData } from '../shared/data'

const navItems = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

const ThemeIcon = ({ darkMode }) => darkMode ? (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36-.7-.7M6.34 6.34l-.7-.7m12.72 0-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
) : (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.35 15.35A9 9 0 0 1 8.65 3.65 9 9 0 1 0 20.35 15.35Z" />
  </svg>
)

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-18% 0px -72% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 font-mono text-sm font-bold text-slate-950 transition hover:border-teal-600 hover:text-teal-700 dark:border-slate-700 dark:text-white dark:hover:border-teal-400 dark:hover:text-teal-300" aria-label={`${cvData.personalInfo.name}, home`}>
            {cvData.personalInfo.shortName}
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a key={item.href} href={item.href} className={`nav-link ${isActive ? 'nav-link-active' : ''}`} aria-current={isActive ? 'location' : undefined}>
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleTheme} className="icon-button" aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={darkMode}>
              <ThemeIcon darkMode={darkMode} />
            </button>
            <button type="button" className="icon-button lg:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}>
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? 'M6 18 18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-navigation" className={`overflow-hidden transition-[max-height,opacity] duration-200 lg:hidden ${mobileMenuOpen ? 'max-h-[30rem] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="grid gap-1 border-t border-slate-200 pt-3 dark:border-slate-800">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-teal-300" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
