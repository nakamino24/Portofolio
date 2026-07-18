/* eslint-disable-next-line no-unused-vars */
import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Badge } from '../../shared/ui'
import { cvData } from '../../shared/data/index'

/**
 * Skills section — redesigned for consistency.
 *
 * Hierarchy:
 *   1. Header + meta strip (years, certs, projects) — credibility at a glance.
 *   2. Featured expertise pillars — three dominant competencies with
 *      project / certification / role anchors instead of proficiency bars.
 *   3. Skill categories — grouped panels (Programming, Web, Data, Ops,
 *      Networking & Security) with inline pills, NOT repeated cards.
 *   4. Administration + soft skills — quiet, low-emphasis strip.
 *   5. Tools & platforms — dense inline badge cloud.
 */

const cn = (...classes) => classes.filter(Boolean).join(' ')

/* ---------- Static taxonomies ---------- */
// Which technical categories collapse into which featured pillars.
// Each pillar lists real anchors drawn from cvData (projects, certs, roles).
const FEATURED_PILLARS = [
  {
    id: 'web',
    label: 'Web Development',
    tone: 'from-blue-500 via-indigo-500 to-purple-600',
    accent: 'text-blue-400',
    ring: 'ring-blue-500/30',
    summary:
      'Built production full-stack systems during a 6-month engineering role at PT Wijaya Karya.',
    anchors: [
      { kind: 'project', label: 'Manpower Management Center' },
      { kind: 'cert', label: 'Junior Web Developer · Digital Talent' },
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
      'Four Cisco certifications plus a CCNA-vetted helpdesk rotation. Comfortable on the operations side of the stack.',
    anchors: [
      {
        kind: 'cert',
        label: 'CCNA — Enterprise, Switching/Routing, Intro to Networks',
      },
      { kind: 'cert', label: 'CyberOps Associate' },
      { kind: 'cert', label: 'Cybersecurity Essentials' },
      { kind: 'role', label: 'Helpdesk Support · Cisco Networking Academy' },
    ],
  },
  {
    id: 'ops',
    label: 'Operations & Data',
    tone: 'from-cyan-500 via-blue-500 to-indigo-600',
    accent: 'text-cyan-400',
    ring: 'ring-cyan-500/30',
    summary:
      'Administrative internship at PT Compotec + lecturer-mentoring work. Strong at turning messy inputs into reliable records.',
    anchors: [
      {
        kind: 'role',
        label: 'Administrative Intern · PT Compotec International',
      },
      { kind: 'role', label: 'Assistant Lecturer · IPB University' },
      { kind: 'role', label: 'Research Staff · IPB University' },
    ],
  },
]

// Map each technical-skill category to a panel icon + description.
const CATEGORY_META = {
  'Programming Languages': {
    icon: '◈',
    description: 'Languages I reach for first when solving problems.',
  },
  Databases: {
    icon: '▤',
    description: 'Relational stores, schema design, and querying.',
  },
  'Web Technologies': {
    icon: '◇',
    description: 'Frameworks and patterns for shipping the front end.',
  },
  'Tools & Software': {
    icon: '◉',
    description: 'Day-to-day tooling — editors, version control, OS.',
  },
  'Networking & Security': {
    icon: '◊',
    description: 'Cisco-stack networking and operational security.',
  },
}

/* ---------- Helper components ---------- */

const KindChip = ({ kind, label }) => {
  const styles = {
    project: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
    cert: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    role: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
  }
  const prefix = {
    project: 'Project',
    cert: 'Cert',
    role: 'Role',
  }
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

KindChip.propTypes = {
  kind: PropTypes.oneOf(['project', 'cert', 'role']).isRequired,
  label: PropTypes.string.isRequired,
}

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

MetaStat.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
}

const SkillPill = ({ name }) => (
  <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 transition hover:border-indigo-400/60 hover:bg-indigo-500/10 hover:text-white">
    {name}
  </span>
)

SkillPill.propTypes = {
  name: PropTypes.string.isRequired,
}

/**
 * Renders one technical-skill category as a panel. Items are pills, not cards —
 * eliminates the per-skill card repetition from the old layout.
 * Includes an "evidence" line: which project / cert used this stack.
 */
const CategoryPanel = ({ category, items, evidence }) => {
  const meta = CATEGORY_META[category] || {
    icon: '◇',
    description: category,
  }
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

CategoryPanel.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  evidence: PropTypes.string,
}

/* ---------- Main component ---------- */

const Skills = () => {
  const [openId, setOpenId] = useState(FEATURED_PILLARS[0].id)

  // Resume-derived counts (no fake proficiency %).
  const stats = useMemo(() => {
    const techItems = cvData.technicalSkills.flatMap((c) => c.skills)
    return {
      techCount: techItems.length,
      certCount: (cvData.certifications || []).length,
      projectCount: (cvData.projects || []).length,
      softCount: (cvData.softSkills || []).length,
    }
  }, [])

  // Anchor text per category — short, factual, references real CV lines.
  const EVIDENCE = {
    'Programming Languages':
      'Manpower Management Center (PT Wijaya Karya) · Helpdesk support for Python Professional Academy.',
    Databases:
      'Schema + queries in the Manpower Management Center admin portal.',
    'Web Technologies':
      'Production build of the Web Admin Portal during the PT Wijaya Karya engineering rotation.',
    'Tools & Software':
      'Daily across teaching, research, and engineering roles.',
    'Networking & Security':
      'Cisco Networking Academy helpdesk · CCNA + CyberOps certifications.',
  }

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-16 text-slate-100"
    >
      {/* Ambient gradient — keeps the dark theme + purple/blue branding. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.28em] text-transparent">
            Skills & Expertise
          </span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
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

        {/* ---------- Meta strip ---------- */}
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
          <MetaStat value={stats.techCount} label="Technologies" />
          <MetaStat value={stats.certCount} label="Certifications" />
          <MetaStat value={stats.projectCount} label="Portfolio projects" />
          <MetaStat value={stats.softCount} label="Soft-skill areas" />
        </div>

        {/* ---------- Featured pillars ---------- */}
        <div className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-white">
              Featured expertise
            </h3>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-slate-500 sm:block">
              Click a pillar to focus
            </span>
          </div>

          {/* Pillar toggles */}
          <div className="flex flex-wrap gap-2">
            {FEATURED_PILLARS.map((p) => {
              const active = openId === p.id
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setOpenId(p.id)}
                  aria-pressed={active}
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

          {/* Active pillar detail — single panel, not 3 cards */}
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

        {/* ---------- Skill categories ---------- */}
        <div className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-white">
              Technical stack — grouped
            </h3>
            <span className="hidden text-xs text-slate-500 sm:block">
              {stats.techCount} technologies · {cvData.technicalSkills.length}{' '}
              categories
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {cvData.technicalSkills.map((cat) => (
              <CategoryPanel
                key={cat.category}
                category={cat.category}
                items={cat.skills}
                evidence={EVIDENCE[cat.category]}
              />
            ))}
          </div>
        </div>

        {/* ---------- Administration + soft skills (quiet row) ---------- */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Administration & professional skills
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Proven across an administrative internship, lecturer role, and
                research staff work — softer on the page because experience
                speaks louder than a list.
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
              'Project Coordination',
              'Data Management',
              'Office Operations',
              'Documentation',
              'Process Optimization',
              'Team Support',
              'Client Relations',
              'Administrative Planning',
              'Vendor Management',
              'Meeting Coordination',
              'Document Preparation',
              'Record Keeping',
            ].map((item) => (
              <SkillPill key={item} name={item} />
            ))}
          </div>

          <div className="mt-4 border-t border-slate-800 pt-3">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Soft skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {cvData.softSkills.map((s) => (
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

        {/* ---------- Tools & platforms (dense cloud) ---------- */}
        <div className="mt-12">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Tools & platforms I work with
          </h3>
          <div className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-900/40 p-3">
            {[
              'React.js',
              'Node.js',
              'JavaScript',
              'Python',
              'PHP',
              'SQL',
              'PostgreSQL',
              'MySQL',
              'HTML',
              'CSS',
              'Git',
              'Linux',
              'Cisco IOS',
              'Microsoft Office',
              'Responsive Design',
              'Database Design',
              'Web Development',
              'System Administration',
              'Network Configuration',
              'Cybersecurity',
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

export default Skills
