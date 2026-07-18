/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import { useTheme } from '../hooks/useTheme'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  const { darkMode } = useTheme()

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}
    >
      <Header />
      <div className="flex min-h-[calc(100vh-3.5rem)]">
        <Sidebar />
        <div className="flex-1 flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6 sm:p-8">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
