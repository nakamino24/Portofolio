/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react'
import { cvData } from '../../shared/data/index'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const projects = cvData.projects || []

  // Helper function to get project icon based on title or technologies
  const getProjectIcon = (title, technologies) => {
    const titleLower = title.toLowerCase()
    const techString = technologies.join(' ').toLowerCase()

    // Define icon mappings based on project characteristics
    if (
      titleLower.includes('management') ||
      techString.includes('management') ||
      techString.includes('sql') ||
      techString.includes('database')
    ) {
      return '🏢'
    } else if (
      titleLower.includes('iot') ||
      titleLower.includes('sensor') ||
      techString.includes('iot') ||
      techString.includes('microcontroller') ||
      techString.includes('sensor')
    ) {
      return '🌱'
    } else if (
      titleLower.includes('helpdesk') ||
      titleLower.includes('support') ||
      techString.includes('support')
    ) {
      return '🎧'
    } else if (
      titleLower.includes('web') ||
      titleLower.includes('website') ||
      techString.includes('html') ||
      techString.includes('css') ||
      techString.includes('javascript') ||
      techString.includes('react') ||
      techString.includes('node')
    ) {
      return '🌐'
    } else if (
      titleLower.includes('mobile') ||
      titleLower.includes('app') ||
      techString.includes('mobile') ||
      techString.includes('android') ||
      techString.includes('ios')
    ) {
      return '📱'
    } else if (
      titleLower.includes('api') ||
      titleLower.includes('integration') ||
      techString.includes('api')
    ) {
      return '🔌'
    } else {
      return '💻' // Default icon
    }
  }

  // Helper function to get gradient class based on index
  const getGradientClass = (index) => {
    const gradients = [
      'from-green-400 to-blue-500',
      'from-purple-400 to-pink-500',
      'from-yellow-400 to-red-500',
      'from-blue-400 to-purple-500',
      'from-pink-400 to-red-500',
      'from-indigo-400 to-purple-500',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-10 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              🚀 Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions from IoT systems to web applications
          </p>
        </div>

        {/* Projects Grid - Primary Focus */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title || index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 relative overflow-hidden">
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(
                    index
                  )} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Project Icon & Status */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${getGradientClass(
                        index
                      )} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {getProjectIcon(
                        project.title || '',
                        project.technologies || []
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                        {project.title || 'Untitled Project'}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                      project.status === 'Completed'
                        ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                        : project.status === 'In Progress'
                          ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white'
                          : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                    }`}
                  >
                    {project.status || 'Ongoing'}
                  </span>
                </div>

                {/* Company */}
                <div className="mb-4">
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                    {project.company || 'Personal Project'}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                  {project.description || 'No description available'}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    ✨ Key Features:
                  </h5>
                  <div className="space-y-2">
                    {(project.features || []).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    🛠️ Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies || []).map((tech, i) => (
                      <span
                        key={i}
                        className={`bg-gradient-to-r ${getGradientClass(
                          index
                        )} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                {project.links && (
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L6 10"
                            />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Hover Effect Overlay */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl pointer-events-none transition-all duration-500"></div>
                )}
              </div>

              {/* Floating elements on hover */}
              {hoveredProject === index && (
                <>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="mb-6">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let&apos;s Build Something Amazing Together
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Have a project in mind? I&apos;d love to discuss how we can
                bring your ideas to life with modern technology solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Start a Conversation
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#about"
                className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
