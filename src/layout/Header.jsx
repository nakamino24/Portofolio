import React from 'react'
import { useTheme } from '../hooks/useTheme'

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              Portfolio
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 35.41V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v13.41"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.35 15.302A2.21 2.21 0 0118 15v-3a3.982 3.982 0 00-.879-2.378M5 5v13.698A2.21 2.21 0 007.648 21h3a2 2 0 002-2v-2.887c-.546-.263-1-0.916-1-1.802 0-.695.23-1.343.613-1.792l1.194-.467a2.003 2.003 0 012.44-1.22l1.805.73a4.008 4.008 0 001.531-3.792z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
