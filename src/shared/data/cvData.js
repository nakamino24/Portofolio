export const cvData = {
  personalInfo: {
    name: 'Muhammad Quways Al-Qarany',
    title: 'Software Engineer / Full-Stack Developer',
    email: 'faiz.quways@gmail.com',
    phone: '+62 895-0327-9320',
    location: 'Bekasi, Indonesia',
    linkedin: 'https://www.linkedin.com/in/muhammadquways',
    github: 'https://github.com/nakamino24',
    portfolio: 'https://myporto-lime.vercel.app',
    summary:
      'Computer Engineering graduate with software engineering experience and a current enterprise IT procurement role. I build full-stack web applications and can demonstrate React, Node.js, TypeScript, PostgreSQL, API development, testing, and CI workflows through public project code.',
  },

  education: [
    {
      degree: "Bachelor's Applied Degree (D4) in Computer Engineering",
      institution: 'IPB University',
      location: 'Bogor, West Java',
      startDate: 'Aug 2020',
      endDate: 'Jul 2024',
      gpa: '3.69 / 4.00',
      highlights: [
        'Focus: Software Engineering, Computer Networks, Embedded Systems',
        'Relevant coursework: Data Structures, Algorithms, Database Systems, Web Programming, Computer Networks, Operating Systems',
      ],
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
      type: 'full-time',
      focus: 'IT Procurement & Administration',
      responsibilities: [
        'Manage IT procurement documentation and coordinate timelines between vendors and internal stakeholders.',
        'Translate requirements between technical users and vendors and track procurement follow-ups.',
      ],
      technologies: ['Procurement Administration', 'Vendor Coordination', 'Stakeholder Coordination'],
      isEngineeringRole: false,
    },
    {
      title: 'Software Engineer',
      company: 'PT Wijaya Karya',
      location: 'Jakarta, Indonesia',
      startDate: 'Aug 2024',
      endDate: 'Jan 2025',
      current: false,
      type: 'full-time',
      focus: 'Software Development',
      responsibilities: [
        'Contributed application features in an internal engineering environment.',
        'Worked on an MRP workflow including document upload and status-tracking UI.',
      ],
      technologies: ['JavaScript', 'Web Development', 'Git'],
      isEngineeringRole: true,
    },
    {
      title: 'Administrative Staff Intern',
      company: 'PT Compotec International',
      location: 'Jakarta, Indonesia',
      startDate: 'May 2025',
      endDate: 'Jun 2025',
      current: false,
      type: 'internship',
      focus: 'Administration & Operations',
      responsibilities: ['Managed operational data in Excel and Google Sheets and supported administrative workflow improvements.'],
      technologies: ['Microsoft Office', 'Google Sheets', 'Document Management'],
      isEngineeringRole: false,
    },
    {
      title: 'Assistant Lecturer',
      company: 'IPB University',
      location: 'Bogor, West Java',
      startDate: 'Jan 2024',
      endDate: 'Jul 2024',
      current: false,
      type: 'part-time',
      focus: 'Computer Engineering Education',
      responsibilities: ['Prepared course materials, delivered tutorials, and supported course administration.'],
      technologies: ['C Programming', 'Data Structures', 'Microcontrollers', 'Embedded Systems'],
      isEngineeringRole: false,
    },
  ],

  technicalSkills: {
    languagesFrameworks: [
      { name: 'JavaScript', evidence: 'React portfolio UI and application feature work' },
      { name: 'React', evidence: 'Reusable portfolio components and Stokku web application' },
      { name: 'Node.js / Express', evidence: 'Stokku API package with Express routes and middleware' },
      { name: 'TypeScript', evidence: 'Stokku web/API packages with typecheck scripts' },
    ],
    database: [
      { name: 'PostgreSQL', evidence: 'Stokku Prisma schema models organizations, products, warehouses, stock levels, and movements' },
    ],
    security: [
      { name: 'JWT Authentication', evidence: 'Stokku API verifies bearer access tokens in authentication middleware' },
      { name: 'bcrypt', evidence: 'Stokku API includes bcryptjs for password handling' },
      { name: 'Role Modeling', evidence: 'Stokku schema defines organization roles and role permissions' },
    ],
    tools: [
      { name: 'Git / GitHub Actions', evidence: 'Stokku includes CI/CD workflow definitions' },
      { name: 'Testing', evidence: 'Stokku API/web expose Jest tests; web also exposes Playwright E2E scripts' },
    ],
  },

  technicalTraining: ['Cisco Networking Academy coursework in networking and cybersecurity'],
  softSkills: ['Communication', 'Stakeholder Coordination', 'Problem Solving', 'Documentation'],

  projects: [
    {
      id: 'stokku',
      title: 'Stokku',
      tagline: 'Full-Stack Inventory Management Project',
      description: 'A public TypeScript monorepo for inventory and operations workflows.',
      longDescription:
        'Stokku is the strongest public engineering sample in this portfolio. Its repository contains a Next.js web app, an Express API, a PostgreSQL/Prisma data model, automated test scripts, and GitHub Actions workflows.',
      problemStatement:
        'Model inventory operations that need structured product, supplier, warehouse, stock-level, and stock-movement data instead of relying on disconnected records.',
      solution:
        'Use a typed monorepo with separate web, API, and database packages. The PostgreSQL schema models inventory relationships and the API protects authenticated routes with JWT verification.',
      constraints: [
        'Keep organization data scoped in the relational model.',
        'Represent inventory across warehouses, bins, products, variants, and movements.',
        'Keep web, API, and database concerns separated while sharing a monorepo workflow.',
      ],
      status: 'Active Development',
      type: 'Personal Engineering Project',
      isFeatured: true,
      liveUrl: 'https://stokku-nakamino24s-projects.vercel.app',
      githubUrl: 'https://github.com/nakamino24/stokku',
      screenshots: ['/stokku-dashboard.png', '/stokku-supplier.png', '/stokku-warehouse.png'],
      architecture: {
        pattern: 'Monorepo with separate web, API, and database packages',
        frontend: 'Next.js 13 + React 18 + TypeScript',
        backend: 'Node.js + Express + TypeScript',
        database: 'PostgreSQL + Prisma',
        auth: 'JWT bearer-token verification; role data is included in the authenticated user context',
        deployment: 'Vercel configuration and deployment workflows are present in the repository',
      },
      techStack: {
        frontend: ['Next.js 13', 'React 18', 'TypeScript', 'React Hook Form', 'Zod', 'SWR'],
        backend: ['Node.js', 'Express', 'TypeScript', 'JWT', 'bcryptjs', 'Zod', 'Helmet', 'Rate Limiting'],
        database: ['PostgreSQL', 'Prisma'],
        quality: ['Jest', 'Supertest', 'Playwright', 'ESLint', 'GitHub Actions'],
      },
      engineeringChallenges: [
        {
          title: 'Inventory domain modeling',
          description: 'Inventory state spans organizations, products, variants, suppliers, warehouses, bins, and movement history.',
          solution: 'The Prisma schema uses explicit relations, unique constraints, enums, and indexes for the main inventory entities.',
        },
        {
          title: 'Authentication boundary',
          description: 'API routes need a consistent authenticated-user context.',
          solution: 'Express middleware validates bearer JWTs and attaches identity, role, and organization fields to the request context.',
        },
        {
          title: 'Monorepo quality checks',
          description: 'Web, API, and database packages need repeatable verification.',
          solution: 'Root scripts coordinate build, lint, typecheck, and tests through Turbo; GitHub workflow files are committed for CI/CD.',
        },
      ],
      keyFeatures: [
        { category: 'Data Model', features: ['Products and variants', 'Suppliers', 'Warehouses, zones, and bins', 'Stock levels', 'Stock movements'] },
        { category: 'Platform', features: ['Organization roles', 'JWT-protected API middleware', 'Web/API/database package separation'] },
        { category: 'Verification', features: ['Typecheck scripts', 'Jest test scripts', 'Playwright E2E script', 'GitHub Actions workflows'] },
      ],
      limitations: [
        'Repository contents include generated build/cache artifacts that should be cleaned separately in the Stokku repository.',
        'A committed schema or dependency does not by itself prove every modeled workflow is complete in the UI.',
        'No verified Lighthouse or production performance score is claimed here.',
      ],
      roadmap: [
        'Add verified coverage reporting and publish test results.',
        'Document which schema-backed workflows are complete end-to-end in the UI.',
        'Clean generated dist and Turbo cache artifacts from the Stokku repository.',
      ],
    },
    {
      id: 'professional-work',
      title: 'Internal Software Engineering Work',
      tagline: 'Sanitized Professional Case Study',
      description:
        'Contributed to internal application work during a Software Engineer role, including an MRP workflow with document upload and status tracking.',
      longDescription:
        'This entry is intentionally limited to non-confidential information. Internal source code, architecture, user counts, performance data, and deployment details are not presented as public evidence.',
      problemStatement: 'Support an internal material-planning workflow with clearer document and status handling.',
      solution: 'Contributed application features for document upload and status-tracking interactions within the team environment.',
      status: 'Professional Experience',
      type: 'Confidential Professional Work',
      isFeatured: false,
      liveUrl: null,
      githubUrl: null,
      screenshots: [],
      techStack: { frontend: ['JavaScript', 'Web Application Development'] },
    },
  ],

  certifications: [
    { title: 'CCNA – Enterprise Networking, Security, and Automation', issuer: 'Cisco Networking Academy', date: '2024', category: 'Networking', skills: ['Enterprise Networks', 'Network Security', 'Automation'], credentialId: null, url: null },
    { title: 'CCNA – Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy', date: '2024', category: 'Networking', skills: ['Switching', 'Routing', 'Wireless'], credentialId: null, url: null },
    { title: 'CCNA – Introduction to Networks', issuer: 'Cisco Networking Academy', date: '2024', category: 'Networking', skills: ['Network Fundamentals', 'TCP/IP', 'IP Addressing'], credentialId: null, url: null },
    { title: 'CyberOps Associate', issuer: 'Cisco Networking Academy', date: '2024', category: 'Security', skills: ['Security Monitoring', 'Threat Detection', 'Incident Response'], credentialId: null, url: null },
    { title: 'Cybersecurity Essentials', issuer: 'Cisco Networking Academy', date: '2024', category: 'Security', skills: ['Security Fundamentals', 'Risk Assessment'], credentialId: null, url: null },
    { title: 'Junior Web Developer', issuer: 'Digital Talent Scholarship (Kominfo)', date: '2023', category: 'Development', skills: ['Web Development'], credentialId: null, url: null },
    { title: 'Fullstack Developer', issuer: 'ITBox', date: '2023', category: 'Development', skills: ['Frontend', 'Backend', 'Database'], credentialId: null, url: null },
    { title: 'Web Development Professional', issuer: 'MySkill', date: '2023', category: 'Development', skills: ['HTML/CSS', 'JavaScript', 'Responsive Design'], credentialId: null, url: null },
  ],

  additionalExperience: [],
  seo: {
    title: 'Muhammad Quways Al-Qarany | Software Engineer Portfolio',
    description: 'Software Engineer portfolio with public evidence from React, Node.js, TypeScript, PostgreSQL, testing, and CI projects.',
    ogImage: '/og-image.png',
    twitterHandle: '@muhammadquways',
    siteUrl: 'https://myporto-lime.vercel.app',
  },
}

export default cvData
