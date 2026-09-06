import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const Skills = () => (
  <section id="skills" className="section-shell bg-white dark:bg-slate-950" aria-labelledby="skills-heading">
    <PageContainer>
      <div className="section-intro max-w-3xl">
        <span className="section-label">Technical skills</span>
        <h2 id="skills-heading" className="section-title">A stack you can trace back to shipped work.</h2>
        <p className="section-description">No proficiency bars. Each group points to a repository, this portfolio, or documented engineering work.</p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
        {cvData.technicalSkills.map((group) => (
          <article className="bg-stone-50 p-6 dark:bg-slate-950" key={group.category}>
            <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">{group.category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => <span className="tech-chip" key={skill}>{skill}</span>)}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400">{group.evidence}</p>
          </article>
        ))}
      </div>
    </PageContainer>
  </section>
)

export default Skills
