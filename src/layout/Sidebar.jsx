/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
    >
      <div className="flex h-16 items-center px-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex-shrink-0">
          <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
        </div>
        <div className="flex-1 ml-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Portfolio
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="ml-auto p-2 rounded-full text-gray-400 hover:text-gray-500"
          aria-label="Close sidebar"
        >
          <span className="sr-only">Close sidebar</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="mt-10">
          <a
            href="#"
            className="block px-4 py-2 mb-2 text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 mb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#"
            className="block px-4 py-2 mb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Skills
          </a>
          <a
            href="#"
            className="block px-4 py-2 mb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Experience
          </a>
          <a
            href="#"
            className="block px-4 py-2 mb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Education
          </a>
          <a
            href="#"
            className="block px-4 py-2 mb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
