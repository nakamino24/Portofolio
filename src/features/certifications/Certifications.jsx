import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const Certifications = () => {
  const selected = (cvData.certifications || []).slice(0, 4)

  return (
    <section id="certifications" className="py-16 lg:py-20 bg-white dark:bg-neutral-950" aria-labelledby="certifications-heading">
      <PageContainer>
        <div className="max-w-3xl mb-8">
          <span className="section-label">Selected Training</span>
          <h2 id="certifications-heading" className="section-title">Certifications</h2>
          <p className="section-description">Supporting background in networking and security; project evidence remains the primary technical signal.</p>
        </div>

        <div className="max-w-4xl grid sm:grid-cols-2 gap-4">
          {selected.map((cert) => (
            <article key={cert.title} className="p-5 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800">
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{cert.category}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 shrink-0">{cert.date}</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{cert.title}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">{cert.issuer}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export default Certifications
