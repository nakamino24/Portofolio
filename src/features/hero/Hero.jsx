import { cvData } from '../../shared/data'
import { Button } from '../../shared/ui/Button'
import PageContainer from '../../shared/ui/PageContainer'

const Hero = () => {
  const { personalInfo } = cvData
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center bg-white dark:bg-neutral-950" aria-labelledby="hero-heading">
      <PageContainer className="py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-5">{personalInfo.title}</p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">{personalInfo.summary}</p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" onClick={() => scrollTo('projects')}>View Featured Project</Button>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Button variant="secondary" size="lg">GitHub</Button></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><Button variant="secondary" size="lg">LinkedIn</Button></a>
            <Button variant="secondary" size="lg" onClick={() => scrollTo('contact')}>Contact</Button>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default Hero
