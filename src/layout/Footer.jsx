import { cvData } from '../shared/data'

const Footer = () => (
  <footer className="border-t border-slate-200 bg-stone-50 dark:border-slate-800 dark:bg-slate-950" role="contentinfo">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p>© {new Date().getFullYear()} {cvData.personalInfo.name}</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <a className="footer-link" href="#home">Back to top</a>
        <a className="footer-link" href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="footer-link" href={`mailto:${cvData.personalInfo.email}`}>Email</a>
      </div>
    </div>
  </footer>
)

export default Footer
