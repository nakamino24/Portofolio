import React, { useState } from 'react'
import { cvData } from '../../shared/data'
import { formatPeriod } from '../../shared/data/utils/dateFormatter'
import { cn } from '../../shared/utils/cn'

const IconWork = () => (
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
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const IconSchool = () => (
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
)

const IconChevron = ({ open }) => (
  <svg
    className={cn(
      'w-4 h-4 transition-transform duration-200',
      open && 'rotate-180'
    )}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
)

const Milestone = ({ item, type = 'work', isLast }) => {
  const [expanded, setExpanded] = useState(false)
  const hasDetails = item.responsibilities && item.responsibilities.length > 0

  const iconBg =
    type === 'education'
      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/30'
      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/30'

  const accentText =
    type === 'education'
      ? 'text-amber-600 dark:text-amber-400'
      : 'text-blue-600 dark:text-blue-400'

  return (
    <div className="relative pl-10 pb-10 group">
      <div
        className={cn(
          'absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 ring-4',
          iconBg,
          'ring-white dark:ring-gray-950'
        )}
        aria-hidden="true"
      >
        {type === 'education' ? <IconSchool /> : <IconWork />}
      </div>

      {!isLast && (
        <div
          className="absolute left-[11px] top-7 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800"
          aria-hidden="true"
        />
      )}

      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">
              {item.title}
            </h3>
            <p className={cn('text-sm font-medium', accentText)}>
              {item.company || item.institution}
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-full">
            {formatPeriod(item.startDate, item.endDate, item.current)}
          </span>
        </div>

        {item.location && type !== 'education' && (
          <span className="inline-block text-xs text-gray-400 dark:text-gray-500 mb-2 flex items-center gap-1">
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
            {item.location}
          </span>
        )}

        {type === 'education' && item.gpa && (
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
            {item.location && (
              <span className="flex items-center gap-1">
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
                {item.location}
              </span>
            )}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              GPA {item.gpa}
            </span>
          </div>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {item.technologies.map((tech, i) => (
              <span
                key={i}
                className="inline-block text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {hasDetails && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-1"
            aria-expanded={expanded}
            aria-controls={`details-${item.id || Math.random()}`}
          >
            {expanded
              ? 'Hide details'
              : `${item.responsibilities.length} responsibilities`}
            <IconChevron open={expanded} />
          </button>
        )}

        {expanded && hasDetails && (
          <ul
            id={`details-${item.id || Math.random()}`}
            className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 space-y-1.5"
            role="list"
          >
            {item.responsibilities.map((resp, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
              >
                <span
                  className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-400 dark:bg-blue-600"
                  aria-hidden="true"
                />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function About() {
  const { personalInfo, experience, education } = cvData
  const profile = personalInfo?.summary || ''
  const profileHighlight = profile.split('.')[0] + '.'
  const [showFullBio, setShowFullBio] = useState(false)

  const stats = [
    { value: education[0]?.gpa || '—', label: 'GPA' },
    {
      value: experience.filter((e) => e.isEngineeringRole).length,
      label: 'Engineering Roles',
    },
    { value: experience.length, label: 'Total Roles' },
    { value: education.length, label: 'Education' },
  ]

  const allMilestones = [
    ...experience.map((e, i) => ({ ...e, type: 'work', id: `work-${i}` })),
    ...education.map((e, i) => ({ ...e, type: 'education', id: `edu-${i}` })),
  ].sort(
    (a, b) =>
      new Date(b.startDate || b.period?.split('–')[1] || 0) -
      new Date(a.startDate || a.period?.split('–')[1] || 0)
  )

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white dark:bg-gray-950"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)',
          backgroundSize: '44px 44px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
            About
          </span>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            My Journey
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {showFullBio ? profile : profileHighlight}
          </p>
          {profile.includes('.') && profile.split('.').length > 2 && (
            <button
              onClick={() => setShowFullBio(!showFullBio)}
              className="inline-block mt-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {showFullBio ? 'Show less' : 'Read full bio'}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 mb-10 pb-6 border-b border-gray-200 dark:border-gray-700">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {s.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">
            Career Timeline
          </h3>
          <div className="relative" role="list" aria-label="Career timeline">
            {allMilestones.map((item, i) => (
              <Milestone
                key={item.id}
                item={item}
                type={item.type}
                isLast={i === allMilestones.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
