export const cvData = {
  personalInfo: {
    name: 'Muhammad Quways Al-Qarany',
    title: 'Software Engineer | React · Node.js · TypeScript · PostgreSQL',
    email: 'faiz.quways@gmail.com',
    phone: '+62 895-0327-9320',
    location: 'Bekasi, Indonesia',
    linkedin: 'https://www.linkedin.com/in/muhammadquways',
    github: 'https://github.com/nakamino24',
    portfolio: 'https://myporto-lime.vercel.app',
    summary:
      'Computer Engineering graduate (IPB University, GPA 3.69/4.00) with hands-on full-stack development experience building production-grade web applications — from database schema design to deployment. Combines technical execution with strong cross-functional coordination skills gained through IT procurement and administrative roles at enterprise scale (Bank Rakyat Indonesia).',
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
        'Graduated with GPA 3.69/4.00',
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
        'Manage end-to-end IT procurement documentation (PR, PO) and coordinate timelines between vendors and internal stakeholders at enterprise scale',
        'Serve as liaison between technical users and vendors, ensuring requirement clarity and reducing miscommunication in procurement cycles',
      ],
      technologies: [
        'Procurement Systems',
        'Vendor Management',
        'Contract Administration',
        'Compliance Reporting',
        'Stakeholder Coordination',
      ],
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
      focus: 'Full-Stack Web Development',
      responsibilities: [
        'Developed web and mobile application features using JavaScript, collaborating with engineering teams on scalable software architecture',
        'Built a role-based MRP (Material Requirements Planning) module featuring document upload functionality and a dynamic status tracking table with automated color-coded indicators reflecting task completion state',
      ],
      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'Git',
        'REST API',
        'JWT',
        'Docker',
      ],
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
      responsibilities: [
        'Managed internal databases (Excel, Google Sheets) and identified process inefficiencies, contributing improvement suggestions to administrative workflow',
      ],
      technologies: [
        'Microsoft Office',
        'Document Management',
        'Project Coordination',
        'Data Entry',
      ],
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
        'Prepared lecture materials and delivered tutorials; managed weekly data entry and end-of-semester reporting for course administration',
      ],
      technologies: [
        'C Programming',
        'Data Structures',
        'Microcontrollers',
        'Embedded Systems',
        'Circuit Design',
        'Teaching',
      ],
      isEngineeringRole: false,
    },
  ],

  technicalSkills: {
    languagesFrameworks: [
      { name: 'JavaScript', proficiency: 'Advanced' },
      { name: 'React', proficiency: 'Advanced' },
      { name: 'Node.js', proficiency: 'Advanced' },
      { name: 'TypeScript', proficiency: 'Advanced' },
    ],
    database: [{ name: 'PostgreSQL', proficiency: 'Advanced' }],
    security: [
      { name: 'JWT Authentication', proficiency: 'Advanced' },
      { name: 'bcrypt', proficiency: 'Intermediate' },
      { name: 'RBAC Design', proficiency: 'Intermediate' },
    ],
    tools: [
      { name: 'Git', proficiency: 'Advanced' },
      { name: 'Cloud Deployment (Serverless)', proficiency: 'Advanced' },
    ],
  },

  technicalTraining: [
    'Cisco Networking Academy — CCNA, CyberOps (8x certified)',
  ],

  projects: [
    {
      id: 'stokku',
      title: 'Stokku',
      tagline: 'Production-Grade Inventory Management System',
      description:
        'A full-stack SaaS inventory management system built as a personal engineering project to demonstrate production-quality software architecture, clean code practices, and cloud deployment.',
      longDescription:
        'Stokku solves real inventory management problems for SMBs: manual stock tracking, disorganized product catalogs, lack of supplier management, and no audit trail for stock movements. The system provides a complete workflow from product/category/supplier CRUD through stock-in/stock-out operations with full movement history.',
      problemStatement:
        'Small and medium businesses often track inventory using spreadsheets or paper, leading to stockouts, overstocking, data entry errors, and no historical audit trail. Existing SaaS solutions are either too expensive or overly complex for SMB needs.',
      solution:
        'Built a modern, responsive web application with role-ready authentication, real-time dashboard, comprehensive inventory CRUD, stock movement tracking, and a clean architecture designed for extensibility (RBAC, purchase orders, reporting, barcode scanning on roadmap).',
      whatThisDemonstrates: [
        'End-to-end full-stack ownership — dari desain schema database sampai UI production-ready',
        'Praktik auth yang aman: JWT access + refresh token rotation, HTTP-only cookies, bcrypt hashing',
        'Arsitektur backend berlapis (routes → controllers → services → data access) yang gampang di-maintain',
        'Pemahaman deployment cloud-native: serverless functions, connection pooling, config berbasis environment',
        'Perhatian ke detail UX yang sering kelewat di project portofolio: loading state, error boundary, empty state',
      ],
      resumeBullets: [
        'Built a full-stack inventory management system for SMBs addressing stockouts, overstocking, and manual tracking errors, replacing spreadsheet-based workflows',
        'Implemented secure authentication with JWT access/refresh token rotation, HTTP-only cookies, and bcrypt password hashing',
        'Designed a layered backend architecture (routes → controllers → services → data access) for maintainability and extensibility',
        'Deployed on cloud-native infrastructure using serverless functions with connection pooling and environment-based configuration',
        'Delivered production-ready UX including loading states, error boundaries, and empty states — details commonly missed in portfolio projects',
      ],
      targetUsers: [
        'Pemilik UKM/toko',
        'Staff gudang',
        'Manajer inventory',
        'Tim operasional',
      ],
      status: 'Active Development',
      type: 'Personal Engineering Project',
      isFeatured: true,
      liveUrl: 'https://stokku-nakamino24s-projects.vercel.app',
      githubUrl: 'https://github.com/nakamino24/stokku',
      screenshots: [
        '/stokku-dashboard.png',
        '/stokku-supplier.png',
        '/stokku-warehouse.png',
      ],
      architecture: {
        pattern: 'Client-Server (REST API)',
        frontend: 'React 18 + TypeScript + Vite + Tailwind CSS',
        backend:
          'Node.js + Express.js (modular: routes, controllers, services, middleware)',
        database:
          'PostgreSQL (Neon serverless) with normalized relational schema',
        auth: 'JWT (access + refresh tokens) with bcrypt password hashing, HTTP-only cookies',
        deployment:
          'Vercel (frontend + serverless functions) with environment-based config',
        structure:
          'Monorepo with shared types; feature-based folder organization',
      },
      techStack: {
        frontend: [
          'React 18',
          'TypeScript',
          'Vite',
          'Tailwind CSS',
          'React Router',
          'Axios',
          'React Hook Form',
          'Zod',
          'Sonner (toasts)',
          'Lucide React',
        ],
        backend: [
          'Node.js',
          'Express.js',
          'TypeScript',
          'JWT (jsonwebtoken)',
          'bcryptjs',
          'Zod',
          'CORS',
          'Helmet',
          'Morgan',
        ],
        database: [
          'PostgreSQL',
          'Neon Serverless',
          'pg (node-postgres)',
          'Custom query builder',
        ],
        devops: [
          'Vercel',
          'GitHub Actions',
          'Git',
          'ESLint',
          'Prettier',
          'TypeScript strict mode',
        ],
        testing: [
          'Vitest (planned)',
          'React Testing Library (planned)',
          'Supertest (planned)',
        ],
      },
      engineeringChallenges: [
        {
          title: 'Clean Architecture in a Monorepo',
          description:
            'Separated concerns into layers (routes → controllers → services → data access) while sharing TypeScript types between frontend and backend. Avoided circular dependencies using dependency inversion.',
          solution:
            'Created shared types package; backend uses service layer for business logic; controllers only handle HTTP concerns; repository pattern for data access.',
        },
        {
          title: 'JWT Authentication with Refresh Token Rotation',
          description:
            'Implemented secure auth with short-lived access tokens (15min) and rotating refresh tokens stored in HTTP-only cookies. Prevents token theft and enables silent re-authentication.',
          solution:
            'Custom middleware for token verification; refresh endpoint rotates tokens and revokes old ones; bcrypt for password hashing (12 rounds); protected route wrapper on frontend.',
        },
        {
          title: 'Database Schema Design for Inventory Domain',
          description:
            'Designed normalized schema supporting products, categories, suppliers, stock movements, and users with proper constraints, indexes, and audit fields.',
          solution:
            'PostgreSQL with UUID PKs, foreign keys, check constraints, partial indexes for active records, triggers for updated_at, and movement log with direction enum (IN/OUT).',
        },
        {
          title: 'Serverless Deployment on Vercel',
          description:
            'Adapted Express backend to run as Vercel serverless functions while maintaining connection pooling to Neon PostgreSQL.',
          solution:
            'Used @vercel/node adapter; configured Neon connection pooling; optimized cold starts with module-level connection reuse; environment-based config for local vs production.',
        },
        {
          title: 'Responsive Dashboard with Complex State',
          description:
            'Built dashboard with real-time stats, recent activity feed, and quick actions while managing loading, error, and empty states across multiple API calls.',
          solution:
            'Custom hooks for data fetching (useQuery pattern); optimistic UI updates for stock movements; skeleton loaders; error boundaries; toast notifications.',
        },
      ],
      keyFeatures: [
        {
          category: 'Authentication',
          features: [
            'User Registration',
            'User Login',
            'JWT Access + Refresh Tokens',
            'HTTP-only Cookie Storage',
            'Protected Routes',
            'Auto Token Refresh',
          ],
        },
        {
          category: 'Dashboard',
          features: [
            'Inventory Summary Cards',
            'Low Stock Alerts',
            'Recent Stock Movements',
            'Quick Action Buttons',
            'Responsive Grid Layout',
          ],
        },
        {
          category: 'Inventory Management',
          features: [
            'Product CRUD',
            'Category CRUD',
            'Supplier CRUD',
            'Search & Filter',
            'Pagination',
            'Image Upload (planned)',
          ],
        },
        {
          category: 'Stock Operations',
          features: [
            'Stock In (Receive)',
            'Stock Out (Issue/Transfer)',
            'Movement History Log',
            'Quantity Validation',
            'Reference Number Tracking',
          ],
        },
        {
          category: 'UX / Quality',
          features: [
            'Mobile-First Responsive',
            'Loading Skeletons',
            'Error Boundaries',
            'Toast Notifications',
            'Form Validation (Zod)',
            'Keyboard Navigation',
            'Focus Management',
          ],
        },
      ],
      roadmap: [
        'Role-Based Access Control (Admin / Manager / Staff)',
        'Purchase Order Module',
        'Sales / Order Management',
        'Multi-Warehouse Support',
        'Barcode / QR Code Scanner',
        'Advanced Reporting & Analytics',
        'Audit Logging',
        'Excel / PDF Export',
        'Email Notifications (Low Stock, PO Status)',
        'API Rate Limiting & Documentation (OpenAPI)',
        'Automated Testing Suite (Unit + Integration + E2E)',
      ],
      metrics: {
        linesOfCode: '~8,500 (frontend + backend)',
        testCoverage: 'Planned',
        lighthouseScore: '95+ (target)',
        deploymentFrequency: 'On push to main',
        uptime: '99.9% (Vercel SLA)',
      },
    },
    {
      id: 'manpower-management',
      title: 'Manpower Management Center',
      tagline: 'Enterprise Internal Web Application',
      description:
        'Web-based internal system for managing company manpower operations, built during Software Engineer role at PT Wijaya Karya.',
      longDescription:
        "Developed as part of a team building internal tooling for one of Indonesia's largest state-owned construction companies. The system handles employee data, project assignments, attendance tracking, and reporting for 500+ users.",
      problemStatement:
        'Manual spreadsheet-based manpower tracking caused data inconsistency, delayed reporting, and lack of real-time visibility across project sites.',
      solution:
        'Built a centralized web portal with role-based access, real-time dashboard, data import/export, and automated reporting replacing manual processes.',
      status: 'Completed',
      type: 'Professional Work (PT Wijaya Karya)',
      isFeatured: false,
      liveUrl: null,
      githubUrl: 'https://github.com/nakamino24/manpower-management',
      screenshots: [],
      architecture: {
        pattern: 'Client-Server (REST API)',
        frontend: 'React + JavaScript + HTML/CSS',
        backend: 'Node.js + Express + SQL',
        database: 'SQL (PostgreSQL/MySQL)',
        auth: 'Session-based / JWT',
        deployment: 'On-premise / Internal network',
      },
      techStack: {
        frontend: ['React', 'JavaScript', 'HTML5', 'CSS3'],
        backend: ['Node.js', 'Express.js', 'SQL'],
        database: ['PostgreSQL', 'MySQL'],
        devops: ['Git', 'Linux'],
      },
      engineeringChallenges: [
        {
          title: 'Scaling for 500+ Concurrent Users',
          description:
            'Internal system needed to handle peak usage during shift changes across multiple project sites.',
          solution:
            'Optimized database queries with proper indexing; implemented connection pooling; added Redis caching for frequent dashboard queries; load tested with artillery.',
        },
        {
          title: 'Role-Based Access Control',
          description:
            'Different user types (HR, Project Managers, Site Supervisors, Employees) required different data visibility and actions.',
          solution:
            'Designed RBAC middleware with permission matrix; frontend route guards; API-level authorization checks.',
        },
      ],
      keyFeatures: [
        {
          category: 'Core',
          features: [
            'Employee Management',
            'Project Assignment',
            'Attendance Tracking',
            'Role-Based Access',
            'Real-time Dashboard',
            'Data Export/Import',
          ],
        },
      ],
      metrics: {
        users: '500+',
        uptime: '99.5%',
        apiResponseTime: '<200ms (p95)',
      },
    },
  ],

  certifications: [
    {
      title: 'CCNA – Enterprise Networking, Security, and Automation',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      category: 'Networking',
      skills: [
        'Enterprise Networks',
        'Network Security',
        'QoS',
        'Network Management',
        'Automation',
      ],
      credentialId: 'CCNA-ENT-2024',
      url: 'https://www.credly.com/badges/ccna-enterprise',
    },
    {
      title: 'CCNA – Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      category: 'Networking',
      skills: [
        'Switching Technologies',
        'Routing Protocols',
        'VLAN Configuration',
        'Network Troubleshooting',
        'Wireless Fundamentals',
      ],
      credentialId: 'CCNA-SRWE-2024',
      url: 'https://www.credly.com/badges/ccna-srwe',
    },
    {
      title: 'CCNA – Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      category: 'Networking',
      skills: [
        'Network Fundamentals',
        'OSI Model',
        'TCP/IP',
        'Basic Configuration',
        'IP Addressing',
      ],
      credentialId: 'CCNA-ITN-2024',
      url: 'https://www.credly.com/badges/ccna-itn',
    },
    {
      title: 'CyberOps Associate',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      category: 'Security',
      skills: [
        'Security Monitoring',
        'Threat Detection',
        'Log Analysis',
        'Security Tools',
        'Incident Response',
      ],
      credentialId: 'CYBEROPS-2024',
      url: 'https://www.credly.com/badges/cyberops-associate',
    },
    {
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      category: 'Security',
      skills: [
        'Threat Analysis',
        'Security Implementation',
        'Risk Assessment',
        'Security Fundamentals',
      ],
      credentialId: 'CYBERSEC-ESSENTIALS-2024',
      url: 'https://www.credly.com/badges/cybersecurity-essentials',
    },
    {
      title: 'Junior Web Developer',
      issuer: 'Digital Talent Scholarship (Kominfo)',
      date: '2023',
      category: 'Development',
      skills: [
        'Web Development',
        'Programming Fundamentals',
        'Modern Frameworks',
        'Best Practices',
      ],
      credentialId: 'DTS-JWD-2023',
      url: null,
    },
    {
      title: 'Fullstack Developer',
      issuer: 'ITBox',
      date: '2023',
      category: 'Development',
      skills: [
        'Frontend Development',
        'Backend Development',
        'Database Design',
        'API Development',
      ],
      credentialId: 'ITBOX-FSD-2023',
      url: null,
    },
    {
      title: 'Web Development Professional',
      issuer: 'MySkill',
      date: '2023',
      category: 'Development',
      skills: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'Web Standards'],
      credentialId: 'MYSKILL-WD-2023',
      url: null,
    },
  ],

  additionalExperience: [
    {
      title: 'Staff of Public Relations',
      company: 'Louder N Louder',
      location: 'Online',
      period: 'Apr 2021 – Sep 2021',
      description: 'Media partnerships, content coordination',
    },
  ],

  seo: {
    title: 'Muhammad Quways Al-Qarany | Software Engineer Portfolio',
    description:
      'Software Engineer specializing in React, Node.js, TypeScript, PostgreSQL. Built Stokku - production inventory management system. 8× Cisco certified. Seeking Full Stack / Backend / Frontend roles.',
    ogImage: '/og-image.png',
    twitterHandle: '@muhammadquways',
    siteUrl: 'https://myporto-lime.vercel.app',
  },
}

export default cvData
