import { cvData } from '../../shared/data'
import { formatPeriod } from '../../shared/utils/dateFormatter'
import PageContainer from '../../shared/ui/PageContainer'

const Experience = () => (
  <section id="experience" className="section-shell border-y border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/40" aria-labelledby="experience-heading">
    <PageContainer>
      <div className="section-intro lg:grid lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div>
          <span className="section-label">Experience</span>
          <h2 id="experience-heading" className="section-title">Engineering context meets operational discipline.</h2>
        </div>
        <p className="section-description lg:pt-8">Software delivery, technical communication, and structured coordination—presented as distinct strengths, without recasting procurement work as engineering.</p>
      </div>

      <ol className="border-t border-slate-300 dark:border-slate-700">
        {cvData.experience.map((role, index) => (
          <li className="grid gap-5 border-b border-slate-300 py-8 dark:border-slate-700 md:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[13rem_minmax(0,1fr)_17rem]" key={`${role.company}-${role.title}`}>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">0{index + 1}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{formatPeriod(role.startDate, role.endDate, role.current)}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{role.title}</h3>
              <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">{role.company} · {role.location}</p>
              <ul className="mt-5 space-y-2">
                {role.responsibilities.map((item) => <li className="text-base leading-7 text-slate-600 dark:text-slate-300" key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <p className="eyebrow">{role.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {role.technologies.map((item) => <span className="tech-chip" key={item}>{item}</span>)}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </PageContainer>
  </section>
)

export default Experience
