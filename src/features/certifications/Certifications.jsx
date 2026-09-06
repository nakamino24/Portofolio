import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const Certifications = () => (
  <section id="certifications" className="section-shell bg-white dark:bg-slate-950" aria-labelledby="certifications-heading">
    <PageContainer>
      <div className="section-intro max-w-3xl">
        <span className="section-label">Certifications</span>
        <h2 id="certifications-heading" className="section-title">Selected credentials.</h2>
        <p className="section-description">Relevant networking, security, and development coursework—kept compact so projects stay central.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {cvData.certifications.map((cert) => (
          <article className="flex items-start justify-between gap-5 border-t border-slate-200 py-5 dark:border-slate-800" key={cert.title}>
            <div>
              <h3 className="font-semibold text-slate-950 dark:text-white">{cert.title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
            </div>
            <span className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">{cert.date}</span>
          </article>
        ))}
      </div>
    </PageContainer>
  </section>
)

export default Certifications
