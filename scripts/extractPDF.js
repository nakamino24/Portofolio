// scripts/extractPDF.js
/* eslint-disable no-unused-vars */
const fs = require('fs')
const path = require('path')
const pdf = require('pdf-parse')

const {
  formatDate,
  parseDateRange,
  calculateDuration,
} = require('../src/data/utils/dateFormatter')
const {
  categorizeSkill,
  groupSkillsByCategory,
} = require('../src/data/utils/skillMatcher')
const { filterItems, searchItems } = require('../src/data/utils/filterUtils')
const {
  sortByDateDescending,
  sortByString,
  sortByNumber,
} = require('../src/data/utils/sortUtils')
const {
  isValidEmail,
  isValidPhone,
  isValidURL,
  isRequired,
  isValidSkillLevel,
} = require('../src/data/utils/validation')

const pdfPath = 'E:/Berkas Kerja/CV/Muhammad Quways Al-Qarany-resume (1).pdf'
const outputPath = path.resolve('./src/data/cvData.js')

function parsePdfText(text) {
  // Split into lines and clean
  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  // Define section headers we want to stop at for profile
  const sectionHeaders = [
    'work experiences',
    'experience',
    'education',
    'organizational experience',
    'technical skills',
    'soft skills',
    'certifications',
    'projects',
  ]

  // Extract personal info: first 3 non-empty lines
  const personalInfoLines = lines.slice(0, 3)
  const remainingLines = lines.slice(3)

  // Build personalInfo object
  const [nameLine, contactLine, addressLine] = personalInfoLines
  const name = nameLine || ''
  const address = addressLine || ''
  const contactParts = (contactLine || '').split('|').map((part) => part.trim())
  const phone = contactParts[0] || ''
  const email = contactParts[1] || ''
  const linkedin = (contactParts[2] || '').replace('www.', '').trim()
  const github = (contactParts[3] || '').replace('github.com/', '').trim()
  const portfolio = contactParts[4] || '' || 'https://myporto-lime.vercel.app/'

  const personalInfo = {
    name,
    title: '', // TODO: maybe extract from profile?
    email,
    phone,
    location: address,
    linkedin,
    github,
    portfolio,
  }

  // Extract profile: collect lines until we hit a section header
  let profileLines = []
  for (let line of remainingLines) {
    const lowerLine = line.toLowerCase()
    // Check if this line matches any section header (exact match or with colon at end)
    const isHeader = sectionHeaders.some(
      (header) => lowerLine === header || lowerLine === header + ':'
    )
    if (isHeader) {
      break
    }
    profileLines.push(line)
  }
  const profileText = profileLines.join(' ').trim()

  // Hardcoded data from the original cvData.js (as seen earlier)
  const hardcodedData = {
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
    ],
    projects: [
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

  // Override profile with the one we extracted (if we got something meaningful)
  if (profileText.length > 10) {
    hardcodedData.profile = profileText
  }

  // Override personalInfo
  hardcodedData.personalInfo = personalInfo

  return hardcodedData
}

async function extractPDFData() {
  try {
    const dataBuffer = fs.readFileSync(pdfPath)
    const pdfParser = new pdf.PDFParse({ data: dataBuffer })
    await pdfParser.load()
    const data = await pdfParser.getText()

    // For now, we'll just log the text and later implement parsing
    console.log('PDF text extracted, length:', data.text.length)
    console.log('First 500 chars:', data.text.substring(0, 500))

    // Implement actual parsing logic using the utilities above
    const extractedData = parsePdfText(data.text)

    // Write extracted data to file
    const fileContent = `// Extracted from PDF resume\n// Auto-generated on ${new Date().toISOString()}\n\nexport const cvData = ${JSON.stringify(
      extractedData,
      null,
      2
    )};`

    fs.writeFileSync(outputPath, fileContent)
    console.log(`Data written to ${outputPath}`)
  } catch (error) {
    console.error('Error processing PDF:', error)
    process.exit(1)
  }
}

extractPDFData()
