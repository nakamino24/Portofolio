/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import { useTheme } from '../shared/hooks/useTheme'
import Navbar from './Navbar'
import Footer from './Footer'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  const { darkMode } = useTheme()

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}
    >
      <Navbar />
      <div className="flex-1 flex-col">
        <main className="flex-1 overflow-y-auto p-6 sm:p-8">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
