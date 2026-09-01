import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const Contact = () => {
  const { personalInfo } = cvData

  const actions = [
    { label: 'Email', href: `mailto:${personalInfo.email}`, detail: personalInfo.email },
    { label: 'LinkedIn', href: personalInfo.linkedin, detail: 'Connect on LinkedIn' },
    { label: 'GitHub', href: personalInfo.github, detail: 'View public repositories' },
  ]

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white dark:bg-neutral-950" aria-labelledby="contact-heading">
      <PageContainer>
        <div className="max-w-3xl mb-10">
          <span className="section-label">Contact</span>
          <h2 id="contact-heading" className="section-title">Get In Touch</h2>
          <p className="section-description">
            I&apos;m interested in Junior / Associate Software Engineer, Full-Stack, Backend, and Frontend opportunities. The links below contact me directly—there is no intermediary form or message-delivery service.
          </p>
        </div>

        <div className="max-w-3xl grid sm:grid-cols-3 gap-4">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={action.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="p-5 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl hover:border-gray-400 dark:hover:border-neutral-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span className="block font-semibold text-gray-900 dark:text-white mb-1">{action.label}</span>
              <span className="block text-sm text-gray-600 dark:text-gray-400">{action.detail}</span>
            </a>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export default Contact
