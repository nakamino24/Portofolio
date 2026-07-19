import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const Skills = () => {
  const { technicalSkills, softSkills } = cvData

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: technicalSkills?.languagesFrameworks?.map(s => s.name) || ['JavaScript', 'React', 'Node.js', 'TypeScript'],
    },
    {
      title: 'Database',
      skills: technicalSkills?.database?.map(s => s.name) || ['PostgreSQL'],
    },
    {
      title: 'Security',
      skills: technicalSkills?.security?.map(s => s.name) || ['JWT Authentication', 'bcrypt', 'RBAC Design'],
    },
    {
      title: 'Tools & Platforms',
      skills: technicalSkills?.tools?.map(s => s.name) || ['Git', 'Cloud Deployment', 'Docker', 'Vercel'],
    },
  ]

  return (
    <section
      id="skills"
      className="py-16 lg:py-24 bg-white dark:bg-neutral-950"
      aria-labelledby="skills-heading"
    >
      <PageContainer>
        <div className="max-w-3xl mb-12">
          <span className="section-label">Skills</span>
          <h2 id="skills-heading" className="section-title">
            Technical Expertise
          </h2>
          <p className="section-description">
            Technologies and tools I use to build production-grade applications.
          </p>
        </div>

        <div className="max-w-4xl grid sm:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"
            >
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {softSkills && softSkills.length > 0 && (
          <div className="max-w-4xl">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </PageContainer>
    </section>
  )
}

export default Skills