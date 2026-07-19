import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const Certifications = () => {
  const { certifications } = cvData || []
  const safeCertifications = certifications || []

  return (
    <section
      id="certifications"
      className="py-16 lg:py-24 bg-white dark:bg-neutral-950"
      aria-labelledby="certifications-heading"
    >
      <PageContainer>
        <div className="max-w-3xl mb-12">
          <span className="section-label">Certifications</span>
          <h2 id="certifications-heading" className="section-title">
            Professional Credentials
          </h2>
          <p className="section-description">
            Industry-recognized certifications validating expertise across networking, security, and development.
          </p>
        </div>

        <div className="max-w-4xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {safeCertifications.map((cert, index) => (
            <div
              key={index}
              className="p-5 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {cert.category}
                </span>
                {cert.date && (
                  <span className="text-xs text-gray-600 dark:text-gray-400 shrink-0">
                    {cert.date}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                {cert.issuer}
              </p>
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 4).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
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
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export default Certifications