/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import { cvData } from '../data/index'
import { Card } from '../components/ui'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-10 animate-bounce"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              👨‍💼 About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Background
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {cvData.profile}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                🎓
              </div>
              Education
            </h3>
            <div className="space-y-4">
              {cvData.education.map((edu, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <h5 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {edu.institution}
                      </h5>
                    </div>
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                      {edu.gpa}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-1"></div>
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-1"></div>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm">
                💼
              </div>
              Professional Experience
            </h3>
            <div className="space-y-4">
              {cvData.experience.map((exp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <h5 className="text-lg font-medium text-green-600 dark:text-green-400">
                        {exp.company}
                      </h5>
                    </div>
                    <span className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  {exp.location && (
                    <div className="mb-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-1"></div>
                      <span>{exp.location}</span>
                    </div>
                  )}
                  {exp.responsibilities && (
                    <div className="space-y-2">
                      <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-1"></div>
                        Key Responsibilities:
                      </h5>
                      <ul className="list-disc list-inside pl-4 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exp.technologies && (
                    <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-1"></div>
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
