import { cvData } from '../../shared/data'
import { formatPeriod } from '../../shared/utils/dateFormatter'
import PageContainer from '../../shared/ui/PageContainer'

const Experience = () => {
  const { experience } = cvData

  return (
    <section
      id="experience"
      className="py-16 lg:py-24 bg-white dark:bg-neutral-950"
      aria-labelledby="experience-heading"
    >
      <PageContainer>
        <div className="max-w-3xl mb-12">
          <span className="section-label">Experience</span>
          <h2 id="experience-heading" className="section-title">
            Work History
          </h2>
          <p className="section-description">
            From enterprise IT procurement to full-stack engineering — roles that built technical depth and operational excellence.
          </p>
        </div>

        <div className="max-w-3xl space-y-6">
          {experience.map((role, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {role.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {role.company}
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 shrink-0">
                  {formatPeriod(role.startDate, role.endDate, role.current)}
                </span>
              </div>

              {role.location && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {role.location}
                </p>
              )}

              <ul className="space-y-2 mb-4">
                {role.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {role.technologies && role.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {role.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export default Experience
