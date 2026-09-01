import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const List = ({ items }) => (
  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
    {items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true">•</span><span>{item}</span></li>)}
  </ul>
)

const StokkuCaseStudy = () => {
  const stokku = cvData.projects.find((project) => project.id === 'stokku')
  if (!stokku) return null

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-neutral-950" aria-labelledby="stokku-case-study">
      <PageContainer>
        <div className="max-w-4xl">
          <span className="section-label">Project Case Study</span>
          <h2 id="stokku-case-study" className="section-title mb-4">Stokku — Engineering Evidence</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Implemented items below are limited to evidence visible in the public repository. Roadmap items are explicitly separated.
          </p>

          <div className="space-y-12">
            <div><h3 className="text-xl font-semibold mb-3">1. Problem</h3><p className="text-gray-700 dark:text-gray-300">{stokku.problemStatement}</p></div>
            <div><h3 className="text-xl font-semibold mb-3">2. Constraints</h3><List items={stokku.constraints} /></div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Architecture</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                {Object.entries(stokku.architecture).map(([key, value]) => (
                  <div key={key} className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">{key}</dt>
                    <dd className="text-sm text-gray-800 dark:text-gray-200">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">4. Key Engineering Decisions</h3>
              <div className="space-y-4">
                {stokku.engineeringChallenges.map((item) => (
                  <article key={item.title} className="p-5 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">{item.solution}</p>
                  </article>
                ))}
              </div>
            </div>

            <div><h3 className="text-xl font-semibold mb-3">5. Implementation Evidence</h3>{stokku.keyFeatures.map((group) => <div key={group.category} className="mb-5"><h4 className="font-semibold mb-2">{group.category}</h4><List items={group.features} /></div>)}</div>
            <div><h3 className="text-xl font-semibold mb-3">6. Current Limitations</h3><List items={stokku.limitations} /></div>
            <div><h3 className="text-xl font-semibold mb-3">7. Next Improvements</h3><List items={stokku.roadmap} /></div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default StokkuCaseStudy
