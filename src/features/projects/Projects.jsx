import React, { useState } from 'react'
import { cvData } from '../../shared/data'
import { Card, Badge, Button } from '../../shared/ui'
import { cn } from '../../shared/utils/cn'

const FeaturedProjects = () => {
  const { projects } = cvData
  const featuredProjects = projects.filter((p) => p.isFeatured)
  const otherProjects = projects.filter((p) => !p.isFeatured)
  const [activeTab, setActiveTab] = useState('overview')

  const project = featuredProjects[0]

  const TabButton = ({ id, label, children }) => (
    <button
      role="tab"
      id={`tab-${id}`}
      aria-selected={activeTab === id}
      aria-controls={`panel-${id}`}
      onClick={() => setActiveTab(id)}
      className={cn(
        'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        activeTab === id
          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
      )}
    >
      {label}
      {children}
    </button>
  )

  const TabPanel = ({ id, label, children }) => (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      hidden={activeTab !== id}
      className="animation-fade-in"
    >
      {children}
    </div>
  )

  if (!project) return null

  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-gray-950 py-16 lg:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
            Featured Project
          </span>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            {project.tagline}
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <Card className="mb-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Problem Statement
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Solution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What This Demonstrates
                  </h3>
                  <ul className="space-y-2" role="list">
                    {project.whatThisDemonstrates.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <svg
                          className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6 border-l border-gray-200 dark:border-gray-800 pl-6 lg:pl-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Links
                  </h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
                      >
                        <svg
                          className="w-5 h-5 text-gray-500 group-hover:text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        <span className="font-medium text-gray-900 dark:text-white">
                          Live Demo
                        </span>
                        <svg
                          className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
                      >
                        <svg
                          className="w-5 h-5 text-gray-500 group-hover:text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="font-medium text-gray-900 dark:text-white">
                          Source Code
                        </span>
                        <svg
                          className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <div className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        Repository private — available upon request
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Status
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        project.status === 'Active Development'
                          ? 'success'
                          : 'primary'
                      }
                    >
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Personal Engineering Project
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Target Users
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.targetUsers.map((user, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {user}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mb-8" role="tablist" aria-label="Project details">
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 dark:border-gray-800 pb-1">
              <TabButton id="overview" label="Overview" />
              <TabButton id="architecture" label="Architecture" />
              <TabButton id="challenges" label="Engineering Challenges" />
              <TabButton id="features" label="Key Features" />
              <TabButton id="roadmap" label="Roadmap" />
              <TabButton id="metrics" label="Metrics" />
            </div>

            <TabPanel id="overview" label="Overview">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Tech Stack
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(project.techStack).map(
                        ([category, techs]) => (
                          <div key={category}>
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                              {category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {techs.map((tech, i) => (
                                <Badge
                                  key={i}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </Card>

                  <Card>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Architecture Overview
                    </h3>
                    <dl className="space-y-3 text-sm">
                      {Object.entries(project.architecture).map(
                        ([key, value]) => (
                          <div key={key} className="flex justify-between gap-4">
                            <dt className="text-gray-500 dark:text-gray-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </dt>
                            <dd className="text-gray-900 dark:text-white font-medium text-right max-w-[60%] truncate">
                              {value}
                            </dd>
                          </div>
                        )
                      )}
                    </dl>
                  </Card>
                </div>

                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>
                </Card>
              </div>
            </TabPanel>

            <TabPanel id="architecture" label="Architecture">
              <div className="space-y-6">
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    System Architecture
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{`┌─────────────────────────────────────────────────────────────┐
│                     CLIENT (Browser)                        │
│  React 18 + TypeScript + Vite + Tailwind CSS               │
│  • React Router v6 (SPA routing)                            │
│  • Axios (API client with interceptors)                    │
│  • React Hook Form + Zod (validation)                      │
│  • Sonner (toast notifications)                            │
└─────────────────────────┬───────────────────────────────────┘
                          │ HTTPS / REST API
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    VERCEL EDGE NETWORK                       │
│  • Serverless Functions (Express.js)                        │
│  • Automatic HTTPS, Global CDN                              │
│  • Edge caching for static assets                           │
└─────────────────────────┬───────────────────────────────────┘
                          │ Connection Pool
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   NEON POSTGRESQL (Serverless)              │
│  • Auto-scaling, Branch-based DB                            │
│  • Connection pooling via PgBouncer                         │
│  • Point-in-time recovery                                   │
└─────────────────────────────────────────────────────────────┘`}</pre>
                  </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Backend Structure
                    </h3>
                    <ul className="space-y-2" role="list">
                      {[
                        'routes/ — HTTP route definitions',
                        'controllers/ — Request handling & validation',
                        'services/ — Business logic layer',
                        'middleware/ — Auth, error handling, logging',
                        'db/ — Connection pool, query helpers',
                        'utils/ — Shared helpers, constants',
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="font-mono text-blue-500">📁</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Database Schema Highlights
                    </h3>
                    <ul className="space-y-2" role="list">
                      {[
                        'users — UUID PK, email unique, password hash, role',
                        'products — UUID PK, SKU unique, category FK, supplier FK',
                        'categories — UUID PK, name unique, parent_id (self-ref)',
                        'suppliers — UUID PK, contact info, address',
                        'stock_movements — UUID PK, product FK, direction (IN/OUT), qty, reference, notes, created_at',
                        'Indexes on: product_id, direction, created_at, reference',
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="font-mono text-green-500">🗄</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    API Design Principles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        RESTful Conventions
                      </h4>
                      <ul
                        className="space-y-1 text-sm text-gray-600 dark:text-gray-400"
                        role="list"
                      >
                        <li>
                          • Resource-based URLs (/api/products,
                          /api/stock-movements)
                        </li>
                        <li>• Proper HTTP verbs (GET, POST, PUT, DELETE)</li>
                        <li>
                          • Status codes (200, 201, 400, 401, 403, 404, 500)
                        </li>
                        <li>
                          • Consistent error envelope: &#123; error: &#123;
                          code, message, details &#125; &#125;
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Security & Quality
                      </h4>
                      <ul
                        className="space-y-1 text-sm text-gray-600 dark:text-gray-400"
                        role="list"
                      >
                        <li>
                          • JWT with short-lived access (15min) + rotating
                          refresh tokens
                        </li>
                        <li>• HTTP-only secure cookies for token storage</li>
                        <li>• bcrypt (12 rounds) for password hashing</li>
                        <li>• Zod schema validation on all inputs</li>
                        <li>• Helmet.js for security headers</li>
                        <li>• CORS configured for production domain only</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </TabPanel>

            <TabPanel id="challenges" label="Engineering Challenges">
              <div className="space-y-6">
                {project.engineeringChallenges.map((challenge, i) => (
                  <Card key={i} className="border-l-4 border-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <span className="text-2xl">{i + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {challenge.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Challenge
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {challenge.description}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Solution
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {challenge.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabPanel>

            <TabPanel id="features" label="Key Features">
              <div className="space-y-6">
                {project.keyFeatures.map((featureGroup, i) => (
                  <Card key={i}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Badge variant="primary" className="text-xs">
                        {featureGroup.category}
                      </Badge>
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {featureGroup.features.map((feature, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <svg
                            className="w-4 h-4 text-green-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabPanel>

            <TabPanel id="roadmap" label="Roadmap">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Planned enhancements to evolve Stokku into a comprehensive
                  inventory management platform.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.roadmap.map((item, i) => (
                    <Card key={i} variant="outlined">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-blue-600 dark:text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {item}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabPanel>

            <TabPanel id="metrics" label="Metrics">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <Card key={key} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </Card>
                ))}
              </div>
            </TabPanel>
          </div>

          {otherProjects.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Other Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((proj, i) => (
                  <Card
                    key={i}
                    className="hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {proj.title}
                        </h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          {proj.tagline}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {proj.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.techStack?.frontend?.slice(0, 5).map((tech, j) => (
                        <Badge key={j} variant="subtle" className="text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Source
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
