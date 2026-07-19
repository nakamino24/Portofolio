import { cvData } from '../../shared/data'
import { Button } from '../../shared/ui/Button'
import PageContainer from '../../shared/ui/PageContainer'

const Hero = () => {
  const { personalInfo } = cvData

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950"
      aria-labelledby="hero-heading"
    >
      <PageContainer className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            {personalInfo.name}
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            {personalInfo.title}
          </p>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {personalInfo.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default Hero
