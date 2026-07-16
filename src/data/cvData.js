// This will be replaced with actual parsed data from PDF
export const cvData = {
  personalInfo: {
    name: 'Muhammad Quways Al-Qarany',
    title: 'Computer Engineering Graduate & Software Engineer',
    email: 'faiz.quways@gmail.com',
    phone: '0895-0327-9320',
    location: 'Pondok Gede, Bekasi',
    linkedin: 'linkedin.com/in/muhammadquways',
    github: 'github.com/nakamino24',
    portfolio: 'https://myporto-lime.vercel.app/',
  },

  profile:
    'Recent Computer Engineering graduate from IPB University with a strong passion for technology and administration. Experienced in helpdesk support, software development, and administrative roles. Skilled in Microsoft Office, databases, and front-end web technologies. Fast learner and team player with excellent problem-solving skills and commitment to continuous learning.',

  education: [
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'IPB University',
      gpa: '3.69',
      period: '2021 - 2024',
      location: 'Bogor, West Java',
    },
  ],

  experience: [
    {
      title: 'Administrative Intern',
      company: 'PT Compotec International',
      period: 'May - June 2025',
      location: 'Jakarta, Indonesia',
      responsibilities: [
        'Managed administrative tasks and office operations',
        'Supported various departments with data entry and documentation',
        'Assisted in project coordination and communication',
        'Gained experience in corporate environment and business processes',
      ],
      technologies: [
        'Microsoft Office',
        'Data Management',
        'Project Coordination',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'PT Wijaya Karya',
      period: 'August 2024 - January 2025',
      location: 'Jakarta, Indonesia',
      responsibilities: [
        'Developed a web-based internal system using JavaScript, SQL, and HTML/CSS',
        'Created and maintained Web Admin Portal for internal operations',
        'Collaborated with cross-functional teams to deliver software solutions',
        'Implemented responsive web designs and optimized application performance',
      ],
      technologies: ['JavaScript', 'SQL', 'HTML/CSS', 'Web Development'],
    },
    // More experiences will be added from PDF parsing
  ],

  organizationalExperience: [
    {
      title: 'Staff of Public Relation',
      organization: 'Louder N Louder',
      period: 'Apr 2021 - Sep 2021',
      location: 'Online',
      responsibilities: [
        'Coordinated with various media outlets to secure partnerships and media coverage for the event',
        "Developed and implemented strategies to enhance the event's visibility and reach through social media and other media platforms",
        'Created and managed content for promotional materials, including social media posts, press releases, and event advertisements',
        'Collaborated with the marketing team to ensure consistent messaging and branding across all media channels',
        'Assisted in negotiating sponsorship deals and managing relationships with media partners',
        'Monitored and analyzed media coverage to measure the effectiveness of media partnerships and promotional efforts',
      ],
    },
  ],

  technicalSkills: [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'PHP', 'Python', 'SQL', 'HTML', 'CSS'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Database Design'],
    },
    {
      category: 'Web Technologies',
      skills: ['React.js', 'Node.js', 'Web Development', 'Responsive Design'],
    },
    {
      category: 'Tools & Software',
      skills: ['Microsoft Office', 'Git', 'Linux', 'System Administration'],
    },
    {
      category: 'Networking & Security',
      skills: [
        'Cisco Networking',
        'Network Configuration',
        'Cybersecurity',
        'Network Troubleshooting',
      ],
    },
  ],

  softSkills: [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Critical Thinking',
    'Adaptability',
    'Leadership',
    'Project Management',
  ],

  certifications: [
    {
      title: 'Junior Web Developer',
      issuer: 'Digital Talent Scholarship',
      date: '2023',
      description:
        'Latest certification focusing on junior-level web development skills and modern programming practices.',
      skills: [
        'Web Development',
        'Programming Fundamentals',
        'Modern Frameworks',
        'Best Practices',
      ],
      category: 'Development',
    },
    {
      title: 'Fullstack Developer',
      issuer: 'ITBox',
      date: '2023',
      description:
        'Comprehensive fullstack development certification covering both frontend and backend technologies.',
      skills: [
        'Frontend Development',
        'Backend Development',
        'Database Design',
        'API Development',
      ],
      category: 'Development',
    },
    // More certifications will be added from PDF parsing
  ],

  projects: [
    // Projects will be added from PDF or created based on experience
    {
      title: 'Manpower Management Center',
      company: 'PT Wijaya Karya',
      description:
        'Developed a web-based internal system for managing company operations, using JavaScript, SQL, and HTML/CSS.',
      technologies: ['JavaScript', 'SQL', 'HTML/CSS'],
      features: [
        'User Management System',
        'Role-based Access Control',
        'Real-time Dashboard',
        'Data Export/Import',
        'Responsive Design',
      ],
      status: 'Completed',
      links: {
        github: 'https://github.com/nakamino24/manpower-management',
        demo: 'https://manpower-management.example.com',
      },
    },
  ],
}
