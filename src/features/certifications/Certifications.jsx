/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import { cvData } from '../../shared/data/index'

const Certifications = () => {
  const certifications = cvData.certifications || []

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Networking':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Security':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'Development':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              🏆 Certifications
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications demonstrating expertise across
            development, networking, and security domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {certifications.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Total Certifications
            </div>
          </div>
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {certifications.filter((c) => c.issuer?.includes('Cisco')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Cisco Certifications
            </div>
          </div>
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {
                certifications.filter((c) => c.category === 'Development')
                  .length
              }
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Development Certifications
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(cert.category)}`}
                  >
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>

                <h4 className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {cert.issuer}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {cert.date && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                    {cert.date}
                  </p>
                )}

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h5 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Key Skills:
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I believe in staying current with technology trends and continuously
            expanding my skill set. These certifications represent my commitment
            to professional development and expertise in various domains.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certifications
