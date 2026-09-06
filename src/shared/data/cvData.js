const portfolioUrl = 'https://portofolio-eight-liart.vercel.app'

export const cvData = {
  personalInfo: {
    name: 'Muhammad Quways Al-Qarany',
    shortName: 'MQ',
    title: 'Full-Stack Developer building reliable web and mobile products.',
    email: 'faiz.quways@gmail.com',
    location: 'Bekasi, Indonesia',
    linkedin: 'https://www.linkedin.com/in/muhammadquways',
    github: 'https://github.com/nakamino24',
    portfolio: portfolioUrl,
    summary:
      'Computer Engineering graduate with hands-on experience across React, TypeScript, Node.js, FastAPI, PostgreSQL, MongoDB, automated testing, and CI workflows.',
    about:
      'I turn operational requirements into maintainable software. My public work covers a web-based inventory platform and a mobile personal-finance product, while my professional background adds experience in documentation, stakeholder coordination, and structured delivery.',
  },

  projects: [
    {
      id: 'stokku',
      name: 'Stokku',
      description:
        'An inventory and operations platform for managing products, suppliers, warehouses, stock levels, and stock movements.',
      type: 'Full-Stack Web Platform',
      status: 'Active Development',
      problem:
        'Inventory teams need connected records for products, suppliers, locations, and every movement that changes available stock.',
      approach:
        'A typed monorepo separates the Next.js interface, Express API, and Prisma data layer while organization-scoped services keep operational data isolated.',
      contribution:
        'Built and maintain the web, API, database, authentication, validation, and automated quality-checking layers.',
      technologies: ['TypeScript', 'Next.js', 'Express', 'PostgreSQL', 'Prisma', 'Jest', 'Playwright'],
      highlights: [
        'Organization-aware inventory model with products, suppliers, warehouses, bins, stock levels, and movement history.',
        'Cookie-based refresh sessions, memory-held access tokens, role context, and password-recovery flows.',
        'Zod validation, consistent API errors, request IDs, security headers, and rate limiting.',
        'Jest and Supertest suites, Playwright flows, and GitHub Actions quality checks.',
      ],
      githubUrl: 'https://github.com/nakamino24/stokku',
      liveUrl: 'https://stokku-nakamino24s-projects.vercel.app',
      image: '/stokku-dashboard.png',
      imageAlt: 'Stokku inventory dashboard showing operational stock information',
      gallery: [
        { src: '/stokku-supplier.png', alt: 'Stokku supplier management screen' },
        { src: '/stokku-warehouse.png', alt: 'Stokku warehouse management screen' },
      ],
      detail:
        'The repository contains implemented web routes and API modules for inventory, purchasing, sales, users, roles, reports, and settings. Schema coverage is broader than what a public screenshot alone proves, so this portfolio does not claim that every modeled workflow is complete end-to-end.',
    },
    {
      id: 'wallume',
      name: 'Wallume',
      description:
        'A personal finance mobile platform for managing wallets, transactions, budgets, goals, recurring bills, investments, and financial health.',
      type: 'Mobile + API Platform',
      status: 'Internal Preview',
      problem:
        'Personal finances are fragmented across wallets, transactions, plans, recurring obligations, and investment records.',
      approach:
        'An Expo Router mobile client connects to a FastAPI service backed by MongoDB, with money-safe transaction semantics and bilingual product flows.',
      contribution:
        'Built and maintain the mobile experience, backend services, authentication, finance-domain behavior, localization, and test suites.',
      technologies: ['Expo', 'React Native', 'TypeScript', 'FastAPI', 'MongoDB', 'Jest', 'pytest'],
      highlights: [
        'Multi-wallet income, expense, and transfer flows with balance-preserving create, edit, and delete behavior.',
        'Budgets, savings goals, recurring bills, investments, reports, and planning workflows.',
        'JWT and bcrypt authentication with password recovery, token blacklisting, and rate limiting.',
        'Indonesian and English localization, balance privacy controls, and an Android net-worth widget.',
        'Frontend Jest tests, backend pytest suites, and GitHub Actions validation.',
      ],
      githubUrl: 'https://github.com/nakamino24/Wallume',
      liveUrl: null,
      visual: 'wallume',
      imageAlt: 'Wallume branded project visual',
      detail:
        'Wallume currently targets an EAS Android internal preview. Its repository identifies frontend 1.0.6c and backend 1.0.5c as the current sources of truth; no public demo, current APK, or v1.0.7 release is advertised here.',
    },
  ],

  experience: [
    {
      title: 'IT Procurement Administrator',
      company: 'PT Bank Rakyat Indonesia (Persero) Tbk',
      location: 'Jakarta, Indonesia',
      startDate: 'Sep 2025',
      endDate: null,
      current: true,
      label: 'Operations & coordination',
      responsibilities: [
        'Coordinate technical requirements, procurement documentation, timelines, and structured follow-up across internal stakeholders and vendors.',
        'Maintain clear decision records and translate operational needs into actionable communication without presenting procurement work as software engineering.',
      ],
      technologies: ['Technical Requirements', 'Vendor Communication', 'Documentation', 'Stakeholder Coordination'],
    },
    {
      title: 'Software Engineer',
      company: 'PT Wijaya Karya',
      location: 'Jakarta, Indonesia',
      startDate: 'Aug 2024',
      endDate: 'Jan 2025',
      current: false,
      label: 'Software development',
      responsibilities: [
        'Contributed application features in an internal engineering environment.',
        'Worked on a material-planning workflow with document upload and status-tracking interactions; confidential implementation details remain private.',
      ],
      technologies: ['JavaScript', 'Web Development', 'Git'],
    },
    {
      title: 'Assistant Lecturer',
      company: 'IPB University',
      location: 'Bogor, Indonesia',
      startDate: 'Jan 2024',
      endDate: 'Jul 2024',
      current: false,
      label: 'Computer engineering education',
      responsibilities: [
        'Prepared learning materials, delivered tutorials, and supported course administration for computer engineering subjects.',
      ],
      technologies: ['C', 'Data Structures', 'Microcontrollers', 'Technical Communication'],
    },
  ],

  technicalSkills: [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'React Native', 'Expo Router', 'Tailwind CSS'],
      evidence: 'Stokku web app, Wallume mobile client, and this portfolio.',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'JWT'],
      evidence: 'Stokku API modules and Wallume backend services.',
    },
    {
      category: 'Data',
      skills: ['PostgreSQL', 'Prisma', 'MongoDB', 'Motor', 'Data Modeling'],
      evidence: 'Relational inventory modeling and document-based finance data.',
    },
    {
      category: 'Testing & Quality',
      skills: ['Jest', 'Supertest', 'Playwright', 'pytest', 'ESLint'],
      evidence: 'Automated frontend, API, domain, and end-to-end checks.',
    },
    {
      category: 'Tools & Delivery',
      skills: ['Git', 'GitHub Actions', 'Vercel', 'Turbo', 'API Documentation'],
      evidence: 'Monorepo workflows, continuous validation, and preview delivery.',
    },
  ],

  education: {
    degree: "Bachelor's Applied Degree (D4) in Computer Engineering",
    institution: 'IPB University',
    location: 'Bogor, West Java',
    startDate: 'Aug 2020',
    endDate: 'Jul 2024',
    gpa: '3.69 / 4.00',
    highlights: ['Software engineering', 'Database systems', 'Computer networks', 'Embedded systems'],
  },

  certifications: [
    { title: 'CCNA — Enterprise Networking, Security, and Automation', issuer: 'Cisco Networking Academy', date: '2024' },
    { title: 'CCNA — Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy', date: '2024' },
    { title: 'CyberOps Associate', issuer: 'Cisco Networking Academy', date: '2024' },
    { title: 'Junior Web Developer', issuer: 'Digital Talent Scholarship', date: '2023' },
    { title: 'Fullstack Developer', issuer: 'ITBox', date: '2023' },
  ],

  seo: {
    title: 'Muhammad Quways Al-Qarany | Full-Stack Developer',
    description:
      'Full-Stack Developer portfolio featuring Stokku and Wallume, with evidence across React, TypeScript, Node.js, FastAPI, PostgreSQL, MongoDB, testing, and CI.',
    ogImage: `${portfolioUrl}/og-image.png`,
    siteUrl: portfolioUrl,
  },
}

export default cvData
