import { cvData } from '../../shared/data'
import { formatPeriod } from '../../shared/utils/dateFormatter'
import PageContainer from '../../shared/ui/PageContainer'

const About = () => {
  const { personalInfo, education } = cvData

  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-white dark:bg-neutral-950"
      aria-labelledby="about-heading"
    >
      <PageContainer>
        <div className="max-w-3xl mb-12">
          <span className="section-label">About</span>
          <h2 id="about-heading" className="section-title">
            Background
          </h2>
          <p className="section-description">
            {personalInfo.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{formatPeriod(edu.startDate, edu.endDate, edu.current)}</span>
                  </div>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Quick Facts
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Computer Engineering Graduate</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">IPB University, GPA 3.69/4.00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Full-Stack Engineer</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">React, Node.js, TypeScript, PostgreSQL</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">8× Cisco Certified</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CCNA, CyberOps Associate, Security Essentials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Production Experience</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise IT procurement + full-stack development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default About
