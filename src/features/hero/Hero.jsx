/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import { cvData } from '../../shared/data/index'

const Hero = () => {
  const { personalInfo, profile } = cvData

  const projectsCount = cvData.projects?.length || 0
  const skillsCount =
    cvData.technicalSkills?.reduce(
      (sum, r) => sum + (r.skills?.length || 0),
      0
    ) || 0
  const certificationsCount = cvData.certifications?.length || 0
  const experienceYears = '5+'

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Ambient background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Two subtle large blobs for depth — muted, not competing */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-400/10 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ── Left: Content ── */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/40 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-blue-700 dark:text-blue-300 uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-none mb-4">
              {personalInfo.name}
            </h1>

            {/* Title — gradient accent */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-snug">
              {personalInfo.title || 'Software Engineer'}
            </h2>

            {/* Profile — shorter, scannable, maximum ~65 char line */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {profile}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-900/90 dark:hover:bg-white/90 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                View my work
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-semibold rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Get in touch
              </a>
            </div>

            {/* Stats row — small inline badges, supporting role */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  💼
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {experienceYears}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Years
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  🚀
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {projectsCount}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Projects
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  🛠️
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {skillsCount}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Skills
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  🏆
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {certificationsCount}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Certs
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Geometric focal point ── */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Outer ring */}
              <div className="w-64 h-64 rounded-full border border-blue-200/30 dark:border-blue-800/20 flex items-center justify-center">
                {/* Middle ring */}
                <div className="w-40 h-40 rounded-full border border-purple-200/30 dark:border-purple-800/20 flex items-center justify-center">
                  {/* Inner solid gradient circle */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/15 dark:to-purple-400/15 flex items-center justify-center backdrop-blur-sm">
                    {/* Monogram initials */}
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {(
                        (personalInfo.name || 'M Q')
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2) || 'MQ'
                      ).toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating tech icons orbiting — subtle */}
              <div className="absolute -top-4 -right-2 w-10 h-10 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md flex items-center justify-center text-lg animate-[float_4s_ease-in-out_infinite]">
                ⚛️
              </div>
              <div className="absolute bottom-0 -left-4 w-8 h-8 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md flex items-center justify-center text-sm animate-[float_3s_ease-in-out_infinite_1s]">
                🐍
              </div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md flex items-center justify-center text-xs animate-[float_5s_ease-in-out_infinite_2s]">
                ☁️
              </div>
              <div className="absolute -bottom-2 right-1 w-4 h-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md flex items-center justify-center text-xs animate-[float_2s_ease-in-out_infinite_0.5s]">
                🗄️
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint — subtle, at bottom */}
        <div className="mt-12 text-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <span className="uppercase tracking-widest">Scroll</span>
            <svg
              className="w-3 h-3 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
