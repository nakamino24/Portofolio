import React from 'react'
import { cvData } from '../../shared/data'
import { formatPeriod } from '../../shared/data/utils/dateFormatter'
import { Card, Badge } from '../../shared/ui'

export default function Education() {
  const { education } = cvData

  return (
    <section
      id="education"
      className="relative bg-white dark:bg-gray-950 py-16 lg:py-20"
      aria-labelledby="education-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
            Education
          </span>
          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Academic Background
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Formal education providing the theoretical foundation for my
            engineering practice.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
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
                      {edu.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end sm:items-end gap-2 shrink-0">
                  <Badge
                    variant="outline"
                    className="text-xs border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20"
                  >
                    GPA: {edu.gpa}
                  </Badge>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {formatPeriod(edu.startDate, edu.endDate, edu.current)}
                  </span>
                </div>
              </div>

              {edu.highlights && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2" role="list">
                    {edu.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500"
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Continuously expanding knowledge through certifications and
            self-directed learning.
            <a
              href="#certifications"
              className="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View Certifications
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
