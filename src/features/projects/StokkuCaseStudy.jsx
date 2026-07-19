import { cvData } from '../../shared/data'
import PageContainer from '../../shared/ui/PageContainer'

const StokkuCaseStudy = () => {
  const stokku = cvData.projects.find((p) => p.id === 'stokku')
  if (!stokku) return null

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-neutral-950">
      <PageContainer>
        <div className="max-w-4xl">
          <span className="section-label">Project Case Study</span>
          <h2 className="section-title mb-8">Stokku — Engineering Deep Dive</h2>

          <div className="space-y-12">
            {/* Executive Summary */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Executive Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Stokku is a production-grade inventory management system built as a personal
                engineering project to demonstrate full-stack software architecture, clean code
                practices, and cloud deployment. The system serves small and medium businesses
                that need an affordable, modern alternative to spreadsheet-based inventory tracking.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-md">
                  {stokku.status}
                </span>
                <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-md">
                  {stokku.type}
                </span>
              </div>
            </div>

            {/* Problem Statement */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Problem Statement
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {stokku.problemStatement}
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1 uppercase tracking-wider">
                    Target Users
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {stokku.targetUsers.map((user, i) => (
                      <li key={i}>• {user}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1 uppercase tracking-wider">
                    Business Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Replace error-prone spreadsheet workflows</li>
                    <li>• Provide real-time inventory visibility</li>
                    <li>• Enable audit trail for compliance</li>
                    <li>• Support multi-user collaboration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution Overview */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Solution Overview
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {stokku.solution}
              </p>
              <div className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800">
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                  Key Workflows
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Inventory CRUD</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Products, categories, and suppliers with search & filter
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Stock Operations</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Stock in/out with reference tracking and history
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Dashboard</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Real-time stats, low stock alerts, recent activity
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Authentication</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      JWT with refresh token rotation, HTTP-only cookies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Architecture */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                System Architecture
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Client-Server (REST API) with modular backend architecture designed for
                maintainability and extensibility.
              </p>
              <div className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 font-mono text-sm">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="text-blue-600 dark:text-blue-400">Frontend:</span> React 18 + TypeScript + Vite + Tailwind CSS
                  </p>
                  <p>
                    <span className="text-blue-600 dark:text-blue-400">Backend:</span> Node.js + Express.js (routes, controllers, services, middleware)
                  </p>
                  <p>
                    <span className="text-blue-600 dark:text-blue-400">Database:</span> PostgreSQL (Neon serverless) with normalized schema
                  </p>
                  <p>
                    <span className="text-blue-600 dark:text-blue-400">Auth:</span> JWT (access + refresh tokens) with bcrypt, HTTP-only cookies
                  </p>
                  <p>
                    <span className="text-blue-600 dark:text-blue-400">Deployment:</span> Vercel (frontend + serverless functions)
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering Decisions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Engineering Decisions
              </h3>
              <div className="space-y-4">
                {stokku.engineeringChallenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {challenge.title}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      {challenge.description}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Highlights */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Feature Highlights
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stokku.keyFeatures.map((featureGroup, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {featureGroup.category}
                    </h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      {featureGroup.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance & Scalability */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Performance & Scalability
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>Module-level connection reuse for Neon PostgreSQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>Partial indexes for active records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>Optimized cold starts with connection pooling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>Lazy loading images in carousel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>Skeleton loaders for better perceived performance</span>
                </li>
              </ul>
            </div>

            {/* Future Roadmap */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Future Roadmap
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {stokku.roadmap.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Metrics */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Project Metrics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {stokku.metrics &&
                  Object.entries(stokku.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800"
                    >
                      <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {value}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export default StokkuCaseStudy