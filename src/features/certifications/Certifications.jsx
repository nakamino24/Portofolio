import React from 'react'
import { cvData } from '../../shared/data'
import { Card, Badge } from '../../shared/ui'
import { cn } from '../../shared/utils/cn'

const Certifications = () => {
  const { certifications } = cvData || {}
  const safeCertifications = certifications || []

  const categoryOrder = ['Networking', 'Security', 'Development']
  const groupedCerts = safeCertifications.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = []
    acc[cert.category].push(cert)
    return acc
  }, {})

  const categoryIcons = {
    Networking: (
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
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
    Security: (
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    Development: (
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  }

  const categoryColors = {
    Networking:
      'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
    Security: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20',
    Development:
      'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
  }

  const categoryTextColors = {
    Networking: 'text-blue-700 dark:text-blue-300',
    Security: 'text-red-700 dark:text-red-300',
    Development: 'text-green-700 dark:text-green-300',
  }

  return (
    <section
      id="certifications"
      className="relative bg-white dark:bg-gray-950 py-16 lg:py-20"
      aria-labelledby="certifications-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
            Certifications
          </span>
          <h2
            id="certifications-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Professional Certifications
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Industry-recognized credentials validating expertise across
            networking, security, and development domains.
            {safeCertifications.length} certification
            {safeCertifications.length !== 1 ? 's' : ''} from Cisco Networking
            Academy and leading tech education providers.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          {categoryOrder.map((category) => {
            const certs = groupedCerts[category]
            if (!certs || certs.length === 0) return null

            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={cn('p-2 rounded-lg', categoryColors[category])}
                  >
                    {categoryIcons[category]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {certs.length} certification
                      {certs.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certs.map((cert, index) => (
                    <Card
                      key={`${category}-${index}`}
                      className={cn(
                        'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200',
                        categoryColors[category]
                      )}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <Badge
                          variant="outline"
                          className={cn(
                            'text-xs',
                            categoryTextColors[category]
                          )}
                        >
                          {category}
                        </Badge>
                        {cert.date && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">
                            {cert.date}
                          </span>
                        )}
                      </div>

                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm {categoryTextColors[category]} font-medium mb-2">
                        {cert.issuer}
                      </p>

                      {cert.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                          {cert.description}
                        </p>
                      )}

                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {cert.skills.slice(0, 5).map((skill, i) => (
                            <Badge
                              key={i}
                              variant="subtle"
                              className="text-[11px]"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {cert.skills.length > 5 && (
                            <Badge variant="outline" className="text-[11px]">
                              +{cert.skills.length - 5} more
                            </Badge>
                          )}
                        </div>
                      )}

                      {cert.credentialId && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                          ID: {cert.credentialId}
                        </p>
                      )}

                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Verify Credential
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-800/50 rounded-2xl text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Continuous Learning Commitment
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I believe in staying current with technology trends. These
              certifications represent my dedication to professional growth
              across the full stack — from network infrastructure to application
              development.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Discuss My Qualifications
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
