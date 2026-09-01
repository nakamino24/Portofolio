import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const Skills = () => {
  const { technicalSkills } = cvData
  const categories = [
    ['Languages & Frameworks', technicalSkills.languagesFrameworks],
    ['Database', technicalSkills.database],
    ['Security & Auth', technicalSkills.security],
    ['Quality & Tooling', technicalSkills.tools],
  ]

  return (
    <section id="skills" className="py-16 lg:py-24 bg-white dark:bg-neutral-950" aria-labelledby="skills-heading">
      <PageContainer>
        <div className="max-w-3xl mb-12">
          <span className="section-label">Skills</span>
          <h2 id="skills-heading" className="section-title">Technical Evidence</h2>
          <p className="section-description">
            Technologies are listed with repository evidence instead of self-assigned proficiency levels.
          </p>
        </div>

        <div className="max-w-5xl grid md:grid-cols-2 gap-6">
          {categories.map(([title, skills]) => (
            <div key={title} className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">{title}</h3>
              <dl className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <dt className="font-medium text-gray-900 dark:text-white">{skill.name}</dt>
                    <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{skill.evidence}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export default Skills
