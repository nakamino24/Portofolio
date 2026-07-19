import { cvData } from '../../shared/data'
import { Button } from '../../shared/ui/Button'

const Hero = () => {
  const { personalInfo, profile } = cvData

  const primaryCTA = 'View My Work'
  const secondaryCTA = 'Get In Touch'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/30">
            <span
              className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-700 dark:text-blue-300">
              Open to Software Engineering Opportunities
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-none mb-6"
          >
            {personalInfo.name}
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-snug">
            {personalInfo.title || 'Software Engineer'}
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            {profile}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              leftIcon={
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
              }
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {primaryCTA}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {secondaryCTA}
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
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
              <span>IT Procurement @ BRI</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span>Full Stack • React • Node.js • PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>8× Cisco Certified (CCNA, CyberOps)</span>
            </div>
          </div>
        </div>

        <div className="mt-16 hidden lg:block">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Scroll down to learn more"
          >
            <span className="uppercase tracking-widest text-xs font-medium">
              Scroll
            </span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
