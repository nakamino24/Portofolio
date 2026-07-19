import React, { useState, useEffect } from 'react'
import { cvData } from '../../shared/data'
import { formatPeriod } from '../../shared/data/utils/dateFormatter'
import {
  filterEngineeringRoles,
  filterNonEngineeringRoles,
} from '../../shared/data/utils/filterUtils'
import { Button } from '../../shared/ui/Button'
import { cn } from '../../shared/utils/cn'

const Resume = () => {
  const [isPrinting, setIsPrinting] = useState(false)

  useEffect(() => {
    const handleBeforePrint = () => setIsPrinting(true)
    const handleAfterPrint = () => setIsPrinting(false)

    window.addEventListener('beforeprint', handleBeforePrint)
    window.addEventListener('afterprint', handleAfterPrint)

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint)
      window.removeEventListener('afterprint', handleAfterPrint)
    }
  }, [])

  const {
    personalInfo,
    profile,
    experience,
    education,
    technicalSkills,
    certifications,
    softSkills,
    projects,
  } = cvData
  const engineeringRoles = filterEngineeringRoles(experience)
  const otherRoles = filterNonEngineeringRoles(experience)

  const printResume = () => {
    window.print()
  }

  const downloadPDF = () => {
    const printWindow = window.open('', '_blank')
    const resumeHTML = document.getElementById('resume-content').outerHTML
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${personalInfo.name} - Resume</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #000; padding: 1in; }
            .header { text-align: center; margin-bottom: 24pt; border-bottom: 2px solid #000; padding-bottom: 12pt; }
            .name { font-size: 24pt; font-weight: bold; margin-bottom: 6pt; text-transform: uppercase; letter-spacing: 1pt; }
            .title { font-size: 14pt; font-weight: normal; margin-bottom: 12pt; }
            .contact { font-size: 10pt; }
            .contact a { color: #000; text-decoration: none; }
            .section { margin-bottom: 18pt; }
            .section-title { font-size: 12pt; font-weight: bold; text-transform: uppercase; letter-spacing: 1pt; border-bottom: 1px solid #000; padding-bottom: 3pt; margin-bottom: 12pt; }
            .role { margin-bottom: 12pt; page-break-inside: avoid; }
            .role-header { display: flex; justify-content: space-between; margin-bottom: 3pt; }
            .role-title { font-weight: bold; font-size: 11pt; }
            .role-company { font-weight: normal; }
            .role-meta { font-size: 10pt; color: #333; }
            .role-focus { font-size: 10pt; font-style: italic; color: #333; margin-bottom: 6pt; }
            .bullets { list-style: none; }
            .bullets li { position: relative; padding-left: 14pt; margin-bottom: 3pt; font-size: 10pt; }
            .bullets li::before { content: "•"; position: absolute; left: 0; font-weight: bold; }
            .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6pt; font-size: 10pt; }
            .skill-category { font-weight: bold; }
            .education-item { margin-bottom: 12pt; page-break-inside: avoid; }
            .education-degree { font-weight: bold; }
            .education-school { font-weight: normal; }
            .education-meta { font-size: 10pt; color: #333; }
            .cert-item { margin-bottom: 6pt; font-size: 10pt; page-break-inside: avoid; }
            .cert-title { font-weight: bold; }
            .cert-issuer { font-weight: normal; }
            .cert-meta { color: #333; }
            .projects-list { font-size: 10pt; }
            .project-item { margin-bottom: 6pt; page-break-inside: avoid; }
            .project-title { font-weight: bold; }
            .project-desc { margin-top: 2pt; }
            @media print { body { padding: 0.75in; } .no-print { display: none !important; } }
          </style>
        </head>
        <body>${resumeHTML}</body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => printWindow.print(), 250)
  }

  return (
    <section
      id="resume"
      className="relative bg-white dark:bg-gray-950 py-16 lg:py-20"
      aria-labelledby="resume-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
                Resume
              </span>
              <h2
                id="resume-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
              >
                Professional Resume
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                ATS-friendly single-column layout. Print or download as PDF.
              </p>
            </div>
            <div
              className="flex gap-3"
              role="group"
              aria-label="Resume actions"
            >
              <Button
                variant="secondary"
                onClick={printResume}
                className={cn(isPrinting && 'hidden')}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print
              </Button>
              <Button
                onClick={downloadPDF}
                className={cn(isPrinting && 'hidden')}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                Download PDF
              </Button>
            </div>

            <div
              id="resume-content"
              className="bg-white text-black dark:bg-gray-900 dark:text-white p-8 sm:p-12 print:p-0 max-w-3xl mx-auto"
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: '11pt',
                lineHeight: 1.5,
              }}
            >
              <div className="header mb-6 pb-6 border-b-2 border-black dark:border-white">
                <h1 className="name text-2xl sm:text-3xl font-bold uppercase tracking-wider mb-2">
                  {personalInfo.name}
                </h1>
                <p className="title text-lg font-normal mb-4">
                  {personalInfo.title}
                </p>
                <div className="contact text-sm space-y-1">
                  <div className="flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                    <span>{personalInfo.phone}</span>
                    <span>{personalInfo.location}</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="section mb-8">
                <h3 className="section-title text-base font-bold uppercase tracking-wider border-b border-black dark:border-white pb-1 mb-4">
                  Professional Summary
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {profile}
                </p>
              </div>

              <div className="section mb-8">
                <h3 className="section-title text-base font-bold uppercase tracking-wider border-b border-black dark:border-white pb-1 mb-4">
                  Technical Skills
                </h3>
                <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                  {Object.entries(technicalSkills || {})
                    .flatMap(([category, skills]) =>
                      Array.isArray(skills)
                        ? skills.map((s) =>
                            typeof s === 'object' ? s.name : s
                          )
                        : skills?.map((s) => s.name) || []
                    )
                    .map((skill, i) => (
                      <span
                        key={i}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>

              <div className="section mb-8">
                <h3 className="section-title text-base font-bold uppercase tracking-wider border-b border-black dark:border-white pb-1 mb-4">
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {[...engineeringRoles, ...otherRoles].map((role, index) => (
                    <div key={index} className="role">
                      <div className="role-header flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <div>
                          <p className="role-title font-bold text-base">
                            {role.title}
                          </p>
                          <p className="role-company text-sm">{role.company}</p>
                        </div>
                        <div className="text-right sm:text-right">
                          <p className="role-meta text-xs text-gray-600 dark:text-gray-400">
                            {formatPeriod(
                              role.startDate,
                              role.endDate,
                              role.current
                            )}
                          </p>
                          {role.location && (
                            <p className="role-meta text-xs text-gray-600 dark:text-gray-400">
                              {role.location}
                            </p>
                          )}
                        </div>
                      </div>
                      {role.focus && (
                        <p className="role-focus text-xs italic text-gray-600 dark:text-gray-400 mb-3">
                          {role.focus}
                        </p>
                      )}
                      <ul className="bullets space-y-2">
                        {role.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                          >
                            {resp}
                          </li>
                        ))}
                      </ul>
                      {role.technologies && role.technologies.length > 0 && (
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="font-medium">Technologies: </span>
                          {role.technologies.join(', ')}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="section mb-8">
                <h3 className="section-title text-base font-bold uppercase tracking-wider border-b border-black dark:border-white pb-1 mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="education-item">
                      <p className="education-degree font-bold text-sm">
                        {edu.degree}
                      </p>
                      <p className="education-school text-sm">
                        {edu.institution}
                      </p>
                      <p className="education-meta text-xs text-gray-600 dark:text-gray-400">
                        {edu.location} ·{' '}
                        {formatPeriod(edu.startDate, edu.endDate)} · GPA:{' '}
                        {edu.gpa}
                      </p>
                      {edu.highlights && (
                        <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="pl-4 relative">
                              <span className="absolute left-0">•</span> {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="section mb-8">
                <h3 className="section-title text-base font-bold uppercase tracking-wider border-b border-black dark:border-white pb-1 mb-4">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="cert-item">
                      <p className="cert-title font-bold text-sm">
                        {cert.title}
                      </p>
                      <p className="cert-issuer text-sm">{cert.issuer}</p>
                      <p className="cert-meta text-xs text-gray-600 dark:text-gray-400">
                        {cert.date} · {cert.category}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section mb-8">
                <h3 className="section-title text-base font-bold uppercase tracking-wider border-b border-black dark:border-white pb-1 mb-4">
                  Featured Projects
                </h3>
                <div className="space-y-4">
                  {projects
                    .filter((p) => p.isFeatured)
                    .map((project, index) => (
                      <div key={index} className="project-item">
                        <p className="project-title font-bold text-sm">
                          {project.title}
                        </p>
                        <p className="project-desc text-sm text-gray-700 dark:text-gray-300">
                          {project.description}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {project.techStack?.frontend?.slice(0, 5).join(', ')}
                          {project.techStack?.backend &&
                            project.techStack.backend.length > 0 &&
                            ` | Backend: ${project.techStack.backend.slice(0, 3).join(', ')}`}
                        </p>
                        <div className="mt-2 flex gap-4 text-xs">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              GitHub
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="section">
                <h3 className="section-title text-base font-bold uppercase tracking-wider border-b border-black dark:border-white pb-1 mb-4">
                  Soft Skills
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {softSkills.join(', ')}
                </p>
              </div>
            </div>

            <div className="no-print mt-8 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                This resume is optimized for ATS parsing. Use the Print button
                above for a clean PDF.
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="secondary" onClick={printResume}>
                  Print Resume
                </Button>
                <Button onClick={downloadPDF}>Download PDF</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
