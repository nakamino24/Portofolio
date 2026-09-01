import { cvData } from '../../shared/data'
import { Button } from '../../shared/ui/Button'
import Carousel from '../../shared/ui/Carousel'
import PageContainer from '../../shared/ui/PageContainer'

const Projects = () => {
  const { projects } = cvData
  const featured = projects.find((project) => project.isFeatured)
  const others = projects.filter((project) => !project.isFeatured)
  if (!featured) return null

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white dark:bg-neutral-950" aria-labelledby="projects-heading">
      <PageContainer>
        <div className="max-w-3xl mb-12">
          <span className="section-label">Projects</span>
          <h2 id="projects-heading" className="section-title">Engineering Work</h2>
          <p className="section-description">Public projects are described from repository evidence; professional work is intentionally sanitized.</p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Carousel images={featured.screenshots || []} altPrefix={`${featured.title} app`} />
          <div className="space-y-6">
            <div><h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{featured.title}</h3><p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{featured.tagline}</p></div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{featured.longDescription}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800"><h4 className="text-xs font-semibold mb-1 uppercase tracking-wider">Problem</h4><p className="text-sm text-gray-700 dark:text-gray-300">{featured.problemStatement}</p></div>
              <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800"><h4 className="text-xs font-semibold mb-1 uppercase tracking-wider">Approach</h4><p className="text-sm text-gray-700 dark:text-gray-300">{featured.solution}</p></div>
            </div>
            <div className="flex flex-wrap gap-2">{Object.values(featured.techStack).flat().map((tech) => <span key={tech} className="px-2.5 py-1 text-xs font-medium border border-gray-200 dark:border-neutral-700 rounded-md">{tech}</span>)}</div>
            <div className="flex flex-wrap gap-3">
              {featured.liveUrl && <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer"><Button size="sm">Live Demo</Button></a>}
              {featured.githubUrl && <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer"><Button variant="secondary" size="sm">Source Code</Button></a>}
            </div>
          </div>
        </div>

        {others.length > 0 && <div className="mt-24"><h3 className="text-2xl font-semibold mb-8">Professional Work</h3>{others.map((project) => <article key={project.id} className="max-w-3xl p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"><h4 className="font-semibold mb-1">{project.title}</h4><p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{project.tagline}</p><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{project.longDescription}</p></article>)}</div>}
      </PageContainer>
    </section>
  )
}

export default Projects
