import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const ExternalIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5h5v5m0-5L10 14M5 7v12h12v-5" />
  </svg>
)

const ProjectVisual = ({ project }) => {
  if (project.image) {
    return (
      <div className="project-visual bg-slate-950">
        <img className="h-full w-full object-cover object-top" src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
    )
  }

  return (
    <div className="project-visual wallume-visual" role="img" aria-label={project.imageAlt}>
      <div className="wallume-orbit wallume-orbit-large" />
      <div className="wallume-orbit wallume-orbit-small" />
      <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/10">
            <img src="/wallume-mark.svg" alt="" className="h-8 w-8" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-100">Internal preview</span>
        </div>
        <div>
          <p className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Wallume</p>
          <p className="mt-2 max-w-sm text-base leading-7 text-teal-50/75">Wallets, plans, and financial health in one mobile workspace.</p>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ project, index }) => (
  <article className="project-card">
    <ProjectVisual project={project} />

    <div className="flex flex-1 flex-col p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">0{index + 1} / Featured</span>
        <span className="status-chip">{project.status}</span>
      </div>

      <h3 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-slate-950 dark:text-white">{project.name}</h3>
      <p className="mt-3 text-lg leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">{project.type}</p>

      <dl className="mt-7 grid gap-5 border-y border-slate-200 py-6 dark:border-slate-800 sm:grid-cols-2">
        <div>
          <dt className="eyebrow">Problem</dt>
          <dd className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.problem}</dd>
        </div>
        <div>
          <dt className="eyebrow">Engineering approach</dt>
          <dd className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.approach}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <p className="eyebrow">My contribution</p>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.contribution}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
      </div>

      <ul className="mt-7 space-y-3">
        {project.highlights.map((highlight) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300" key={highlight}>
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <details className="group mt-7 border-t border-slate-200 pt-5 dark:border-slate-800">
        <summary className="cursor-pointer select-none text-sm font-semibold text-slate-900 marker:text-teal-600 hover:text-teal-700 dark:text-white dark:marker:text-teal-400 dark:hover:text-teal-300">
          Technical details
        </summary>
        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.detail}</p>
        {project.gallery ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.gallery.map((image) => (
              <img className="w-full rounded-lg border border-slate-200 dark:border-slate-700" src={image.src} alt={image.alt} loading="lazy" key={image.src} />
            ))}
          </div>
        ) : null}
      </details>

      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        <a className="button-primary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">Source Code <ExternalIcon /></a>
        {project.liveUrl ? (
          <a className="button-secondary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ExternalIcon /></a>
        ) : null}
      </div>
    </div>
  </article>
)

const Projects = () => (
  <section id="projects" className="section-shell bg-white dark:bg-slate-950" aria-labelledby="projects-heading">
    <PageContainer>
      <div className="section-intro">
        <span className="section-label">Selected work</span>
        <h2 id="projects-heading" className="section-title">Featured projects, backed by source.</h2>
        <p className="section-description">Two products across web and mobile. Every claim below was checked against the current public repositories.</p>
      </div>

      <div className="grid items-stretch gap-7 lg:grid-cols-2">
        {cvData.projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}
      </div>
    </PageContainer>
  </section>
)

export default Projects
