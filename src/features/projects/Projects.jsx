import { cvData } from '../../shared/data'
import { Button } from '../../shared/ui/Button'
import Carousel from '../../shared/ui/Carousel'
import PageContainer from '../../shared/ui/PageContainer'

const StatusList = ({ title, items }) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
      {items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true">•</span><span>{item}</span></li>)}
    </ul>
  </div>
)

const Projects = () => {
  const { projects } = cvData
  const featured = projects.find((project) => project.isFeatured)
  if (!featured) return null

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white dark:bg-neutral-950" aria-labelledby="projects-heading">
      <PageContainer>
        <div className="max-w-3xl mb-10">
          <span className="section-label">Featured Engineering Project</span>
          <h2 id="projects-heading" className="section-title">{featured.title}</h2>
          <p className="section-description">{featured.tagline}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Carousel images={featured.screenshots || []} altPrefix={`${featured.title} app`} />
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Problem</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{featured.problemStatement}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">What I Built</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{featured.whatIBuilt}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {featured.coreStack.map((tech) => <span key={tech} className="px-2.5 py-1 text-xs font-medium border border-gray-200 dark:border-neutral-700 rounded-md">{tech}</span>)}
            </div>
            <div className="flex flex-wrap gap-3">
              {featured.liveUrl && <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer"><Button size="sm">Live Demo</Button></a>}
              {featured.githubUrl && <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer"><Button variant="secondary" size="sm">Source Code</Button></a>}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-5xl">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Engineering Decisions</h3>
          <div className="space-y-5">
            {featured.engineeringDecisions.map((decision) => (
              <article key={decision.title} className="p-5 sm:p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{decision.title}</h4>
                <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div><dt className="font-semibold mb-1">Context</dt><dd className="text-gray-600 dark:text-gray-400 leading-relaxed">{decision.context}</dd></div>
                  <div><dt className="font-semibold mb-1">Decision</dt><dd className="text-gray-600 dark:text-gray-400 leading-relaxed">{decision.decision}</dd></div>
                  <div><dt className="font-semibold mb-1">Why</dt><dd className="text-gray-600 dark:text-gray-400 leading-relaxed">{decision.why}</dd></div>
                  <div><dt className="font-semibold mb-1">Tradeoff</dt><dd className="text-gray-600 dark:text-gray-400 leading-relaxed">{decision.tradeoff}</dd></div>
                </dl>
                <p className="mt-4 text-sm text-gray-800 dark:text-gray-200"><span className="font-semibold">Implementation:</span> {decision.implementation}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-5xl grid md:grid-cols-3 gap-6">
          <StatusList title="Implemented" items={featured.implemented} />
          <StatusList title="In Progress" items={featured.inProgress} />
          <StatusList title="Planned" items={featured.planned} />
        </div>

        <div className="mt-16 max-w-3xl">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Current State</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{featured.currentState}</p>
        </div>
      </PageContainer>
    </section>
  )
}

export default Projects
