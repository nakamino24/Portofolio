import { cvData } from '../../shared/data'
import { formatPeriod } from '../../shared/utils/dateFormatter'
import PageContainer from '../../shared/ui/PageContainer'

const About = () => {
  const { personalInfo, education } = cvData
  return (
    <section id="about" className="section-shell border-y border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/40" aria-labelledby="about-heading">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <span className="section-label">About</span>
            <h2 id="about-heading" className="section-title">Grounded in systems, curious about people.</h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-slate-700 dark:text-slate-200">{personalInfo.about}</p>
            <div className="mt-10 border-t border-slate-300 pt-7 dark:border-slate-700">
              <p className="eyebrow">Education</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{education.degree}</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{education.institution} · {education.location}</p>
                </div>
                <p className="shrink-0 text-sm text-slate-500 dark:text-slate-400">{formatPeriod(education.startDate, education.endDate)}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="tech-chip">GPA {education.gpa}</span>
                {education.highlights.map((item) => <span className="tech-chip" key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default About
