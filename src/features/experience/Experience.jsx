import React from 'react'
import { cvData } from '../../shared/data'
import { formatPeriod } from '../../shared/data/utils/dateFormatter'
import {
  filterEngineeringRoles,
  filterNonEngineeringRoles,
} from '../../shared/data/utils/filterUtils'
import { Card, Badge } from '../../shared/ui'

const Experience = () => {
  const { experience } = cvData
  const engineeringRoles = filterEngineeringRoles(experience)
  const otherRoles = filterNonEngineeringRoles(experience)

  const RoleCard = ({ role, isEngineering }) => (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isEngineering
          ? 'border-l-4 border-blue-500'
          : 'border-l-4 border-gray-300 dark:border-gray-700'
      }`}
    >
      {isEngineering && (
        <div className="absolute top-0 right-0 m-3">
          <Badge variant="primary" className="text-xs">
            Engineering Role
          </Badge>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {role.title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
            {role.company}
          </p>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-full">
          {formatPeriod(role.startDate, role.endDate, role.current)}
        </span>
      </div>

      {role.location && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-1">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {role.location}
        </p>
      )}

      <div className="mb-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          Key Responsibilities
        </h4>
        <ul className="space-y-1.5" role="list">
          {role.responsibilities.map((resp, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              <span
                className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-400 dark:bg-blue-600"
                aria-hidden="true"
              />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      {role.technologies && role.technologies.length > 0 && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Technologies & Skills
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {role.technologies.map((tech, i) => (
              <Badge key={i} variant="subtle" className="text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {role.highlights && role.highlights.length > 0 && (
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Key Achievements
          </h4>
          <ul className="space-y-1.5" role="list">
            {role.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300 leading-relaxed"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  )

  return (
    <section
      id="experience"
      className="relative bg-white dark:bg-gray-950 py-16 lg:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
            Experience
          </span>
          <h2
            id="experience-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            From enterprise IT procurement to full-stack engineering and network
            operations — a progression of roles building technical depth and
            operational excellence.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Software Engineering
              </h3>
              <Badge variant="primary" className="text-xs ml-auto">
                {engineeringRoles.length} role
                {engineeringRoles.length !== 1 ? 's' : ''}
              </Badge>
            </div>

            <div
              className="space-y-6"
              role="list"
              aria-label="Engineering roles"
            >
              {engineeringRoles.map((role, i) => (
                <RoleCard key={i} role={role} isEngineering />
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-6 h-6 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Operations, Support & Education
              </h3>
              <Badge variant="outline" className="text-xs ml-auto">
                {otherRoles.length} roles
              </Badge>
            </div>

            <div
              className="space-y-6"
              role="list"
              aria-label="Operations and support roles"
            >
              {otherRoles.map((role, i) => (
                <RoleCard key={i} role={role} isEngineering={false} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-2xl mx-auto">
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold mb-2">
                Ready for the Next Challenge
              </h3>
              <p className="text-blue-100 mb-6">
                With diverse experience across engineering, operations, and
                security domains, I bring a unique full-stack perspective to
                every project. Let's build something great together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors"
              >
                Get In Touch
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Experience
