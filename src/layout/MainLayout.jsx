import { forwardRef } from 'react'
import { useTheme } from '../shared/hooks/useTheme.jsx'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = forwardRef(({ children }, ref) => {
  const { darkMode } = useTheme()

  return (
    <div
      ref={ref}
      className={`min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}
    >
      <Navbar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </div>
    </div>
  )
})

MainLayout.displayName = 'MainLayout'

export default MainLayout
