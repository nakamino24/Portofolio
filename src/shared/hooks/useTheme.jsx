import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const initialDarkMode = stored ? JSON.parse(stored) : prefersDark
    setDarkMode(initialDarkMode)
    document.documentElement.classList.toggle('dark', initialDarkMode)
  }, [])

  const toggleTheme = useCallback(() => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode))
    document.documentElement.classList.toggle('dark', newDarkMode)
  }, [darkMode])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
