import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const ArrowIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
)

const Hero = () => {
  const { personalInfo } = cvData

  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200/80 bg-stone-50 pt-16 dark:border-slate-800 dark:bg-slate-950" aria-labelledby="hero-heading">
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-50 dark:opacity-30" />
      <PageContainer className="relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:py-28">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
            <span className="h-px w-8 bg-teal-600 dark:bg-teal-400" />
            {personalInfo.location}
          </p>
          <h1 id="hero-heading" className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mt-7 max-w-3xl text-balance text-2xl font-medium leading-tight tracking-[-0.025em] text-slate-700 dark:text-slate-200 sm:text-3xl">
            {personalInfo.title}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            {personalInfo.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href="#projects">
              View Projects <ArrowIcon />
            </a>
            <a className="button-secondary" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="button-secondary" href="#contact">Contact</a>
          </div>
        </div>

        <aside className="hidden border-l border-slate-300 pl-8 dark:border-slate-700 lg:block" aria-label="Engineering focus">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Current focus</p>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="text-sm text-slate-500 dark:text-slate-400">Products</dt>
              <dd className="mt-1 text-lg font-semibold">Web + mobile</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500 dark:text-slate-400">Engineering</dt>
              <dd className="mt-1 text-lg font-semibold">Full stack, APIs, data</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500 dark:text-slate-400">Quality</dt>
              <dd className="mt-1 text-lg font-semibold">Testing + CI</dd>
            </div>
          </dl>
        </aside>
      </PageContainer>
    </section>
  )
}

export default Hero
