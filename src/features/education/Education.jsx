import { cvData } from '../../shared/data'
import { formatPeriod } from '../../shared/utils/dateFormatter'
import PageContainer from '../../shared/ui/PageContainer'

const Education = () => {
  const { education } = cvData

  return (
    <section
      id="education"
      className="py-16 lg:py-24 bg-white dark:bg-neutral-950"
      aria-labelledby="education-heading"
    >
      <PageContainer>
        <div className="max-w-3xl mb-12">
          <span className="section-label">Education</span>
          <h2 id="education-heading" className="section-title">
            Academic Background
          </h2>
          <p className="section-description">
            Formal education providing the theoretical foundation for my engineering practice.
          </p>
        </div>

        <div className="max-w-3xl space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 shrink-0">
                  {formatPeriod(edu.startDate, edu.endDate, edu.current)}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span>{edu.location}</span>
                {edu.gpa && (
                  <>
                    <span>•</span>
                    <span>GPA: {edu.gpa}</span>
                  </>
                )}
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export default Education