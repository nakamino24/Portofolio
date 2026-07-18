/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { cvData } from '../../shared/data/index'

/* ── Tiny inline icons (SVG) — no emoji dependency ── */
const IconWork = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
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
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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
    className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
)

IconChevron.propTypes = {
  open: PropTypes.bool,
}

const IconCommunity = () => (
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
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

/* ── Extract data ── */
const experience = cvData.experience || []
const education = cvData.education || []
const orgExp = cvData.organizationalExperience || []
const profile = cvData.profile || ''

/* ── Distill profile into a one-liner (first sentence) ── */
const profileHighlight = profile.split('.')[0] + '.'

/* ── Single milestone shape ── */
const Milestone = ({ item, type = 'work', isLast }) => {
  const [expanded, setExpanded] = useState(false)
  const hasDetails = item.responsibilities && item.responsibilities.length > 0

  const iconBg =
    type === 'education'
      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/30'
      : 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/30'

  const accentText =
    type === 'education'
      ? 'text-amber-600 dark:text-amber-400'
      : 'text-blue-600 dark:text-blue-400'

  return (
    <div className="relative pl-10 pb-10 group">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 ${iconBg} flex items-center justify-center z-10 ring-4 ring-white dark:ring-gray-950`}
      >
        {type === 'education' ? <IconSchool /> : <IconWork />}
      </div>

      {/* Connector line from dot downward — except last item */}
      {!isLast && (
        <div className="absolute left-[11px] top-7 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800" />
      )}

      {/* Card */}
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">
              {item.title}
            </h3>
            <p className={`text-sm font-medium ${accentText}`}>
              {item.company || item.institution}
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-full">
            {item.period}
          </span>
        </div>

        {/* Impact highlight — single line extracted from first responsibility */}
        {item.responsibilities && item.responsibilities[0] && (
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2 line-clamp-1">
            {item.responsibilities[0]}
          </p>
        )}

        {/* Location / GPA for education */}
        {item.location && type !== 'education' && (
          <span className="inline-block text-xs text-gray-400 dark:text-gray-500 mb-2">
            {item.location}
          </span>
        )}
        {type === 'education' && item.gpa && (
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span>📍 {item.location}</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              GPA {item.gpa}
            </span>
          </div>
        )}

        {/* Tech tags */}
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

        {/* Expand trigger */}
        {hasDetails && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-1"
            aria-expanded={expanded}
          >
            {expanded
              ? 'Hide details'
              : `${item.responsibilities.length} responsibilities`}
            <IconChevron open={expanded} />
          </button>
        )}

        {/* Expanded detail list */}
        {expanded && hasDetails && (
          <ul className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 space-y-1.5">
            {item.responsibilities.map((resp, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
              >
                <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-400 dark:bg-blue-600" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

/* ── Main component ── */
const About = () => {
  Milestone.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
      company: PropTypes.string,
      institution: PropTypes.string,
      period: PropTypes.string,
      responsibilities: PropTypes.arrayOf(PropTypes.string),
      location: PropTypes.string,
      gpa: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      technologies: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    type: PropTypes.string,
    isLast: PropTypes.bool,
  }

  const [showFullBio, setShowFullBio] = useState(false)

  const stats = [
    { value: cvData.education?.[0]?.gpa || '—', label: 'GPA' },
    { value: '5+', label: 'Years' },
    { value: experience.length, label: 'Roles' },
    { value: orgExp.length, label: 'Orgs' },
  ]

  const allMilestones = [
    ...experience.map((e) => ({ ...e, type: 'work' })),
    ...education.map((e) => ({ ...e, type: 'education' })),
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Ambient background — matching Hero */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ── Section header ── */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
            About
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            My journey
          </h2>

          {/* Short bio */}
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

        {/* ── Quick stats row ── */}
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

        {/* ── Timeline ── */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">
            Career timeline
          </h3>

          <div className="relative">
            {allMilestones.map((item, i) => (
              <Milestone
                key={`${item.type}-${i}`}
                item={item}
                type={item.type}
                isLast={i === allMilestones.length - 1}
              />
            ))}
          </div>
        </div>

        {/* ── Community involvement ── */}
        {orgExp.length > 0 && (
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 dark:text-gray-500">
                <IconCommunity />
              </span>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500">
                Community
              </h3>
            </div>

            {orgExp.map((org, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-4 py-3 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                      {org.title}
                    </h4>
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {org.organization}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                    {org.period}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
                  {org.responsibilities?.[0]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default About
