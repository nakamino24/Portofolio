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
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-10 animate-bounce"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-block mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-xs font-semibold tracking-wide uppercase">
              🚀 Featured Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Showcasing innovative solutions from IoT systems to web applications
          </p>
        </div>

        {/* Projects Grid - Primary Focus */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title || index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(
                    index
                  )} opacity-0 group-hover:opacity-3 transition-opacity duration-300 rounded-xl`}
                ></div>

                {/* Project Icon & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${getGradientClass(
                        index
                      )} rounded-xl flex items-center justify-center text-xl group-hover:scale-105 transition-transform duration-300`}
                    >
                      {getProjectIcon(
                        project.title || '',
                        project.technologies || []
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                        {project.title || 'Untitled Project'}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold shadow-sm ${
                      project.status === 'Completed'
                        ? 'bg-green-500 text-white'
                        : project.status === 'In Progress'
                          ? 'bg-blue-500 text-white'
                          : 'bg-yellow-400 text-white'
                    }`}
                  >
                    {project.status || 'Ongoing'}
                  </span>
                </div>

                {/* Company */}
                <div className="mb-3">
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded-full">
                    {project.company || 'Personal Project'}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description || 'No description available'}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                    ✨ Key Features:
                  </h4>
                  <div className="space-y-1">
                    {(project.features || []).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                    🛠️ Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {(project.technologies || []).map((tech, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded-full text-xs font-semibold transition hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                {project.links && (
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-0.5 text-xs font-semibold transition hover:underline"
                        >
                          Github
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-0.5 text-xs font-semibold transition hover:underline"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Hover Effect Overlay */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-gray-100/20 dark:bg-gray-700/20 rounded-xl pointer-none transition-opacity duration-300"></div>
                )}
              </div>

              {/* Floating elements on hover */}
              {hoveredProject === index && (
                <>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-md">
            <div className="mb-3">
              <div className="text-2xl mb-2">👤</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Let&apos;s Build Something Amazing Together
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Have a project in mind? I&apos;d love to discuss how we can
                bring your ideas to life with modern technology solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:bg-purple-600 hover:to-pink-700"
              >
                Start a Conversation
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50"
              >
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
