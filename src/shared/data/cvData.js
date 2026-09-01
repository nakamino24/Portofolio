export const cvData = {
  personalInfo: {
    name: 'Muhammad Quways Al-Qarany',
    title: 'Early-Career Software Engineer | Full-Stack',
    email: 'faiz.quways@gmail.com',
    phone: '+62 895-0327-9320',
    location: 'Bekasi, Indonesia',
    linkedin: 'https://www.linkedin.com/in/muhammadquways',
    github: 'https://github.com/nakamino24',
    portfolio: 'https://myporto-lime.vercel.app',
    summary:
      'I build full-stack web applications and can show the code behind my decisions. My strongest public project combines React, TypeScript, Node.js, PostgreSQL, testing, and CI, alongside previous professional software engineering experience.',
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
      title: 'Software Engineer',
      company: 'PT Wijaya Karya',
      location: 'Jakarta, Indonesia',
      startDate: 'Aug 2024',
      endDate: 'Jan 2025',
      current: false,
      type: 'full-time',
      focus: 'Software Development',
      responsibilities: [
        'Implemented parts of an internal MRP workflow, including document-upload and status-tracking interactions in a web application.',
        'Worked within an engineering team using JavaScript and Git to contribute application changes while keeping confidential implementation details private.',
      ],
      technologies: ['JavaScript', 'Web Application Development', 'Git'],
      isEngineeringRole: true,
    },
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
        'Coordinate IT procurement documentation and follow-ups across internal stakeholders and vendors, keeping technical requirements and administrative timelines aligned.',
        'Translate requests between technical users and external vendors and maintain the operational records needed to move procurement work forward.',
      ],
      technologies: ['IT Procurement', 'Vendor Coordination', 'Stakeholder Coordination'],
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
      responsibilities: [
        'Prepared tutorials and supported students across C programming, data structures, microcontrollers, and embedded-systems coursework.',
      ],
      technologies: ['C Programming', 'Data Structures', 'Microcontrollers'],
      isEngineeringRole: false,
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
      responsibilities: [
        'Maintained operational data in Excel and Google Sheets and supported routine administrative workflows.',
      ],
      technologies: ['Excel', 'Google Sheets', 'Document Management'],
      isEngineeringRole: false,
    },
  ],

  technicalSkills: {
    core: [
      { name: 'JavaScript / TypeScript', evidence: 'Portfolio code plus Stokku web and API packages with TypeScript typecheck scripts' },
      { name: 'React', evidence: 'Portfolio UI and Stokku web application' },
      { name: 'Node.js / Express', evidence: 'Stokku API routes and middleware' },
      { name: 'PostgreSQL / Prisma', evidence: 'Stokku relational schema for organizations, products, warehouses, stock levels, and movements' },
    ],
    workingKnowledge: [
      { name: 'JWT Authentication', evidence: 'Bearer-token verification and authenticated request context in Stokku API middleware' },
      { name: 'Testing', evidence: 'Jest and Supertest in API/web packages; Playwright E2E scripts in the web package' },
      { name: 'Schema Validation', evidence: 'Zod appears in Stokku application dependencies and validation flows' },
    ],
    tools: [
      { name: 'Git / GitHub', evidence: 'Public project history and repository-based development workflow' },
      { name: 'GitHub Actions', evidence: 'Committed CI/CD workflow definitions in Stokku and portfolio verification workflow' },
      { name: 'Vercel', evidence: 'Public portfolio and Stokku demo deployments' },
      { name: 'Turbo / pnpm workspaces', evidence: 'Stokku root scripts coordinate web, API, and database packages' },
    ],
  },

  projects: [
    {
      id: 'stokku',
      title: 'Stokku',
      tagline: 'Inventory management system — personal full-stack engineering project',
      description: 'A public TypeScript monorepo for inventory and operations workflows.',
      problemStatement:
        'Inventory data becomes difficult to reason about when products, suppliers, warehouse locations, stock quantities, and movement history are stored as disconnected records.',
      whatIBuilt:
        'I structured Stokku as a personal full-stack project with separate web, API, and database packages. I modeled the inventory domain in PostgreSQL/Prisma, implemented an Express authentication boundary, connected the project through a TypeScript monorepo workflow, and deployed a public web demo.',
      status: 'Active Development',
      type: 'Personal Engineering Project',
      isFeatured: true,
      liveUrl: 'https://stokku-nakamino24s-projects.vercel.app',
      githubUrl: 'https://github.com/nakamino24/stokku',
      screenshots: ['/stokku-dashboard.png', '/stokku-supplier.png', '/stokku-warehouse.png'],
      coreStack: ['TypeScript', 'React / Next.js', 'Node.js / Express', 'PostgreSQL', 'Prisma'],
      engineeringDecisions: [
        {
          title: 'Relational inventory model with organization scoping',
          context:
            'Products, variants, suppliers, warehouses, bins, stock levels, and movement history need explicit relationships, while records also need an organization boundary.',
          decision:
            'I modeled the domain in PostgreSQL through Prisma with separate entities, foreign-key relations, organizationId fields, unique constraints, enums, and indexes.',
          why:
            'A relational model makes inventory relationships and ownership constraints visible in the schema instead of encoding them only in application code.',
          tradeoff:
            'The schema becomes larger and changes require more deliberate migrations as the domain evolves.',
          implementation:
            'packages/database/prisma/schema.prisma defines Organization, Product, ProductVariant, Supplier, Warehouse, WarehouseZone, WarehouseBin, StockLevel, StockMovement, roles, permissions, constraints, and indexes.',
        },
        {
          title: 'Single JWT authentication boundary for API requests',
          context:
            'Protected API handlers need a consistent way to reject unauthenticated requests and access the current user, role, and organization.',
          decision:
            'I used Express middleware to verify bearer JWTs before protected handlers and attach identity and organization context to the request.',
          why:
            'Centralizing token verification keeps authentication behavior out of individual route handlers and gives downstream code one request context to read.',
          tradeoff:
            'JWT-based auth requires careful token expiry and revocation handling; role changes are not automatically reflected in already-issued tokens.',
          implementation:
            'apps/api/src/middleware/auth.ts checks the Authorization header, verifies the token, and attaches id, email, name, role, organizationId, and organizationSlug to req.user.',
        },
        {
          title: 'Monorepo separation for web, API, and database packages',
          context:
            'The frontend, backend, and database tooling need separate responsibilities but still need repeatable commands for development and verification.',
          decision:
            'I organized Stokku as pnpm workspaces and use Turbo to coordinate build, lint, typecheck, test, and development commands across packages.',
          why:
            'The structure keeps package boundaries visible while allowing one root workflow to run checks across the project.',
          tradeoff:
            'A monorepo adds workspace and build-tool configuration that would be unnecessary for a very small single-package application.',
          implementation:
            'The root package.json declares apps/* and packages/* workspaces and routes build, lint, typecheck, test, and dev commands through Turbo.',
        },
      ],
      implemented: [
        'Relational schema for organizations, products, variants, suppliers, warehouses, stock levels, and stock movements',
        'JWT bearer-token authentication middleware with user, role, and organization request context',
        'Separate web, API, and database packages with root build, lint, typecheck, and test scripts',
        'Committed Jest/Supertest and Playwright test setup plus GitHub Actions workflow files',
        'Public web demo and portfolio screenshots',
      ],
      inProgress: [
        'End-to-end UI coverage for all schema-backed inventory workflows',
        'Repository cleanup for generated dist and Turbo cache artifacts in Stokku itself',
      ],
      planned: [
        'Publish verified coverage results rather than only test configuration',
        'Document completed user workflows against the data model as implementation grows',
      ],
      currentState:
        'Stokku is an active personal project, not presented as a finished commercial product. The public repository demonstrates the domain model, auth middleware, package structure, quality scripts, tests, CI configuration, and a deployed web interface; some modeled workflows are still being completed end to end.',
    },
  ],

  certifications: [
    { title: 'CCNA – Enterprise Networking, Security, and Automation', issuer: 'Cisco Networking Academy', date: '2024', category: 'Networking' },
    { title: 'CCNA – Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy', date: '2024', category: 'Networking' },
    { title: 'CCNA – Introduction to Networks', issuer: 'Cisco Networking Academy', date: '2024', category: 'Networking' },
    { title: 'CyberOps Associate', issuer: 'Cisco Networking Academy', date: '2024', category: 'Security' },
    { title: 'Cybersecurity Essentials', issuer: 'Cisco Networking Academy', date: '2024', category: 'Security' },
    { title: 'Junior Web Developer', issuer: 'Digital Talent Scholarship (Kominfo)', date: '2023', category: 'Development' },
    { title: 'Fullstack Developer', issuer: 'ITBox', date: '2023', category: 'Development' },
    { title: 'Web Development Professional', issuer: 'MySkill', date: '2023', category: 'Development' },
  ],

  seo: {
    title: 'Muhammad Quways Al-Qarany | Software Engineer Portfolio',
    description: 'Early-career Software Engineer portfolio focused on verifiable full-stack project evidence and technical decisions.',
    ogImage: '/og-image.png',
    twitterHandle: '@muhammadquways',
    siteUrl: 'https://myporto-lime.vercel.app',
  },
}

export default cvData
