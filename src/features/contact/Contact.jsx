import { useState } from 'react'
import { cvData } from '../../shared/data'
import { Input, Textarea, Button } from '../../shared/ui'
import PageContainer from '../../shared/ui/PageContainer'

const validateContactForm = (formData) => {
  const errors = {}

  if (!formData.name || formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!formData.email) {
    errors.email = 'Email is required'
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
  }

  if (!formData.message || formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

const Contact = () => {
  const { personalInfo } = cvData
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-white dark:bg-neutral-950"
      aria-labelledby="contact-heading"
    >
      <PageContainer>
        <div className="max-w-3xl mb-12">
          <span className="section-label">Contact</span>
          <h2 id="contact-heading" className="section-title">
            Get In Touch
          </h2>
          <p className="section-description">
            I&apos;m actively seeking Software Engineering opportunities. Whether you have a role to discuss, a project in mind, or just want to connect — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"
            noValidate
          >
            <div className="space-y-5">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                placeholder="Your full name"
                autoComplete="name"
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                placeholder="your.email@example.com"
                autoComplete="email"
              />

              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
                rows={5}
                placeholder="Tell me about your project, role, or just say hello..."
              />
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                size="lg"
                disabled={status === 'submitting'}
                loading={status === 'submitting'}
              >
                Send Message
              </Button>

              {status === 'success' && (
                <p className="mt-4 text-sm text-green-600 dark:text-green-400" role="alert">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                />
              </svg>
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default Contact