import { useMemo, useState } from 'react'
import { cvData } from '../../shared/data'
import { Card, Badge } from '../../shared/ui'
import { cn } from '../../shared/utils/cn'

const FEATURED_PILLARS = [
  {
    id: 'web',
    label: 'Web Development',
    tone: 'from-blue-500 via-indigo-500 to-purple-600',
    accent: 'text-blue-400',
    ring: 'ring-blue-500/30',
    summary:
      'Built production full-stack systems during engineering role at PT Wijaya Karya. Designed REST APIs, implemented JWT auth, optimized PostgreSQL queries, and deployed to cloud infrastructure.',
    anchors: [
      { kind: 'project', label: 'Manpower Management Center (500+ users)' },
      { kind: 'project', label: 'Stokku Inventory System (Personal)' },
      {
        kind: 'cert',
        label: 'Junior Web Developer · Digital Talent Scholarship',
      },
      { kind: 'cert', label: 'Fullstack Developer · ITBox' },
    ],
  },
  {
    id: 'network',
    label: 'Networking & Security',
    tone: 'from-indigo-600 via-purple-600 to-fuchsia-600',
    accent: 'text-purple-400',
    ring: 'ring-purple-500/30',
    summary:
      'Four Cisco certifications (CCNA Enterprise, Switching/Routing, Intro to Networks) plus CyberOps Associate. Hands-on helpdesk experience troubleshooting Cisco IOS, VLANs, OSPF/EIGRP, and security monitoring.',
    anchors: [
      { kind: 'cert', label: 'CCNA — Enterprise, Switching/Routing, Intro' },
      { kind: 'cert', label: 'CyberOps Associate' },
      { kind: 'cert', label: 'Cybersecurity Essentials' },
      { kind: 'role', label: 'Helpdesk · Cisco Networking Academy' },
    ],
  },
  {
    id: 'ops',
    label: 'Operations & Data',
    tone: 'from-cyan-500 via-blue-500 to-indigo-600',
    accent: 'text-cyan-400',
    ring: 'ring-cyan-500/30',
    summary:
      'IT Procurement at BRI (enterprise vendor coordination), Administrative Intern at PT Compotec, plus academic roles (Lecturer, Research Staff). Strong at translating requirements into reliable systems and documentation.',
    anchors: [
      { kind: 'role', label: 'IT Procurement Admin · BRI (Current)' },
      { kind: 'role', label: 'Admin Intern · PT Compotec International' },
      { kind: 'role', label: 'Assistant Lecturer · IPB University' },
      { kind: 'role', label: 'Research Staff · IPB University' },
    ],
  },
]

const CATEGORY_META = {
  Frontend: {
    icon: '⚛',
    description: 'Frameworks and patterns for shipping modern user interfaces.',
  },
  Backend: {
    icon: '⚙',
    description: 'Server-side logic, API design, and system architecture.',
  },
  Database: {
    icon: '🗄',
    description:
      'Relational stores, schema design, querying, and optimization.',
  },
  'DevOps & Tools': {
    icon: '🔧',
    description: 'Deployment, CI/CD, containerization, and developer tooling.',
  },
  'Networking & Security': {
    icon: '🔐',
    description:
      'Cisco-stack networking, operational security, and threat detection.',
  },
}

const EVIDENCE = {
  Frontend:
    'Stokku (React 18, TypeScript, Tailwind, Vite) · Manpower Management Center (React, JS) at PT Wijaya Karya.',
  Backend:
    'Stokku API (Express.js, JWT, bcrypt) · Production REST APIs at PT Wijaya Karya (Node.js, Express).',
  Database:
    'Stokku schema on Neon PostgreSQL (normalized, indexed, FK constraints) · Production SQL at PT Wijaya Karya.',
  'DevOps & Tools':
    'Vercel (serverless functions, CI/CD) · GitHub Actions · Docker · Postman · VS Code across all projects.',
  'Networking & Security':
    'Cisco Networking Academy helpdesk · CCNA ×3 + CyberOps certs · Cisco IOS, OSPF, EIGRP, VLAN, threat detection.',
}

const KindChip = ({ kind, label }) => {
  const styles = {
    project: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
    cert: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    role: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
  }
  const prefix = { project: 'Project', cert: 'Cert', role: 'Role' }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-medium leading-none',
        styles[kind]
      )}
    >
      <span className="opacity-70">{prefix[kind]}</span>
      <span className="text-slate-100">{label}</span>
    </span>
  )
}

KindChip.displayName = 'KindChip'

const MetaStat = ({ value, label }) => (
  <div className="flex flex-col">
    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-semibold text-transparent">
      {value}
    </span>
    <span className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
      {label}
    </span>
  </div>
)

MetaStat.displayName = 'MetaStat'

const SkillPill = ({ name }) => (
  <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 transition hover:border-indigo-400/60 hover:bg-indigo-500/10 hover:text-white">
    {name}
  </span>
)

SkillPill.displayName = 'SkillPill'

const CategoryPanel = ({ category, items, evidence }) => {
  const meta = CATEGORY_META[category] || { icon: '◇', description: category }
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-indigo-500/40 hover:bg-slate-900/60">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-lg text-indigo-300">
            {meta.icon}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">{category}</h3>
            <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
              {meta.description}
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-400">
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <SkillPill key={skill} name={skill} />
        ))}
      </div>

      {evidence ? (
        <div className="mt-3 border-t border-slate-800 pt-2 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Used in:</span>{' '}
          {evidence}
        </div>
      ) : null}
    </div>
  )
}

CategoryPanel.displayName = 'CategoryPanel'

export default function Skills() {
  const [openId, setOpenId] = useState(FEATURED_PILLARS[0].id)

  const stats = useMemo(() => {
    return {
      techCount: Object.values(cvData.technicalSkills || {}).flat().length,
      certCount: (cvData.certifications || []).length,
      projectCount: (cvData.projects || []).length,
    }
  }, [])

  const skillCategories = [
    {
      category: 'Frontend',
      items: cvData.technicalSkills?.frontend?.map((s) => s.name) || [
        'React',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Vite',
      ],
    },
    {
      category: 'Backend',
      items: cvData.technicalSkills?.backend?.map((s) => s.name) || [
        'Node.js',
        'Express.js',
        'REST API Design',
        'JWT Authentication',
        'bcrypt',
      ],
    },
    {
      category: 'Database',
      items: cvData.technicalSkills?.database?.map((s) => s.name) || [
        'PostgreSQL',
        'Neon PostgreSQL',
        'MySQL',
        'Database Design',
      ],
    },
    {
      category: 'DevOps & Tools',
      items: cvData.technicalSkills?.devops?.map((s) => s.name) || [
        'Vercel',
        'Docker',
        'Git/GitHub',
        'GitHub Actions',
        'Postman',
        'VS Code',
      ],
    },
    {
      category: 'Networking & Security',
      items: cvData.technicalSkills?.networkingSecurity?.map((s) => s.name) || [
        'Cisco IOS',
        'Routing Protocols (OSPF, EIGRP)',
        'Switching (VLAN, STP)',
        'Network Security',
        'Threat Detection',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-16 lg:py-20 text-slate-100"
      aria-labelledby="skills-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.28em] text-transparent">
            Skills & Expertise
          </span>
          <h2
            id="skills-heading"
            className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white"
          >
            Built through{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              real projects, real roles, real certifications.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            A Computer Engineering graduate with a dual profile: production web
            engineering on one side, enterprise networking and operational
            administration on the other. Below is what I&apos;ve shipped and
            where I&apos;ve used each skill — not what I&apos;d rate myself.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
          <MetaStat value={stats.techCount} label="Technologies" />
          <MetaStat value={stats.certCount} label="Certifications" />
          <MetaStat value={stats.projectCount} label="Portfolio projects" />
          <MetaStat value={8} label="Cisco Certifications" />
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-white">
              Featured Expertise
            </h3>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-slate-500 sm:block">
              Click a pillar to focus
            </span>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Expertise pillars"
          >
            {FEATURED_PILLARS.map((p) => {
              const active = openId === p.id
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setOpenId(p.id)}
                  aria-pressed={active}
                  role="tab"
                  aria-selected={active}
                  className={cn(
                    'rounded-full border px-3 py-1 text-sm font-medium transition',
                    active
                      ? 'border-transparent bg-gradient-to-r text-white shadow-lg shadow-indigo-500/20 ' +
                          p.tone
                      : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-indigo-500/50 hover:text-white'
                  )}
                >
                  {p.label}
                </button>
              )
            })}
          </div>

          {FEATURED_PILLARS.filter((p) => p.id === openId).map((p) => (
            <Card
              key={p.id}
              className={cn(
                'mt-4 overflow-hidden border-slate-800 bg-slate-900/60 p-0 ring-1',
                p.ring
              )}
            >
              <div className={cn('bg-gradient-to-r p-4', p.tone)}>
                <h3 className="text-lg font-semibold text-white">{p.label}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/85">
                  {p.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 p-4">
                {p.anchors.map((a, i) => (
                  <KindChip
                    key={`${a.kind}-${i}`}
                    kind={a.kind}
                    label={a.label}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-white">
              Technical Stack — Grouped
            </h3>
            <span className="hidden text-xs text-slate-500 sm:block">
              {stats.techCount} technologies · {skillCategories.length}{' '}
              categories
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => (
              <CategoryPanel
                key={cat.category}
                category={cat.category}
                items={cat.items}
                evidence={EVIDENCE[cat.category]}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Administration & Professional Skills
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Proven across IT procurement at BRI, administrative internship,
                lecturer role, and research staff work — softer on the page
                because experience speaks louder than a list.
              </p>
            </div>
            <Badge
              variant="outline"
              className="self-start border-slate-700 text-slate-400"
            >
              Operational
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'IT Procurement',
              'Vendor Management',
              'Contract Administration',
              'Project Coordination',
              'Data Management',
              'Office Operations',
              'Documentation',
              'Process Optimization',
              'Team Support',
              'Stakeholder Communication',
              'Administrative Planning',
              'Record Keeping',
              'Compliance Reporting',
              'Cross-functional Coordination',
            ].map((item) => (
              <SkillPill key={item} name={item} />
            ))}
          </div>

          <div className="mt-4 border-t border-slate-800 pt-3">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {(cvData.softSkills || []).map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-slate-800 bg-transparent px-3 py-1.5 text-sm text-slate-300 hover:text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Tools & Platforms I Work With
          </h3>
          <div className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-900/40 p-3">
            {[
              'React',
              'TypeScript',
              'Node.js',
              'Express.js',
              'PostgreSQL',
              'Neon',
              'Git',
              'GitHub',
              'Docker',
              'Vercel',
              'Postman',
              'VS Code',
              'Cisco IOS',
              'Linux',
              'Tailwind CSS',
              'Vite',
              'Zod',
              'JWT',
            ].map((t) => (
              <span
                key={t}
                className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300 transition hover:bg-indigo-500/20 hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
