import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const Contact = () => {
  const { personalInfo } = cvData
  const links = [
    { label: 'Email', detail: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { label: 'GitHub', detail: 'github.com/nakamino24', href: personalInfo.github },
    { label: 'LinkedIn', detail: 'linkedin.com/in/muhammadquways', href: personalInfo.linkedin },
  ]

  return (
    <section id="contact" className="section-shell bg-slate-950 text-white" aria-labelledby="contact-heading">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <span className="section-label text-teal-300">Contact</span>
            <h2 id="contact-heading" className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Have a product or engineering problem to work through?</h2>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-8 text-slate-300">I’m open to Full-Stack Developer, Backend Developer, and Software Engineer opportunities. Reach out directly through any channel below.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {links.map((link) => (
                <a className="group rounded-xl border border-slate-700 p-4 transition hover:border-teal-400 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300" href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} key={link.label}>
                  <span className="block text-sm font-semibold text-white">{link.label}</span>
                  <span className="mt-1 block break-words text-xs text-slate-400 group-hover:text-teal-200">{link.detail}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default Contact
