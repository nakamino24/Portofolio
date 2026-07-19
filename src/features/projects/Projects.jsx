import { cvData } from '../../shared/data'
import { Button } from '../../shared/ui/Button'
import Carousel from '../../shared/ui/Carousel'
import PageContainer from '../../shared/ui/PageContainer'

const Projects = () => {
  const { projects } = cvData
  const featured = projects.find(p => p.isFeatured)
  const others = projects.filter(p => !p.isFeatured)

  if (!featured) return null

  const stokku = featured

  return (
    <section
      id="projects"
      className="py-16 lg:py-24 bg-white dark:bg-neutral-950"
      aria-labelledby="projects-heading"
    >
      <PageContainer>
        <div className="max-w-3xl mb-12">
          <span className="section-label">Projects</span>
          <h2 id="projects-heading" className="section-title">
            Featured Work
          </h2>
          <p className="section-description">
            Production-grade applications built with modern architecture and clean code practices.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <Carousel
                images={stokku.screenshots || []}
                altPrefix={`${stokku.title} app`}
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stokku.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {stokku.tagline}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {stokku.longDescription}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1 uppercase tracking-wider">
                    Problem
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {stokku.problemStatement}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1 uppercase tracking-wider">
                    Solution
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {stokku.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(stokku.techStack || {}).map(([_category, techs]) =>
                    techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {stokku.liveUrl && (
                  <a href={stokku.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">Live Demo</Button>
                  </a>
                )}
                {stokku.githubUrl && (
                  <a href={stokku.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">GitHub Repository</Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-24">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((project, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        {project.tagline}
                      </p>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 shrink-0">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack?.frontend?.slice(0, 5).map((tech, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Source
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </PageContainer>
    </section>
  )
}

export default Projects
