# Portfolio Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a complete redesign of Muhammad Quways Al-Qarany's portfolio website with a data-first approach, grid-based portfolio focus, and performance optimizations.

**Architecture:** Component-based React application using Vite, Tailwind CSS, and a centralized data model extracted from the PDF resume. The implementation follows a phased approach prioritizing the projects section as the primary visual element.

**Tech Stack:** React 18+, Vite, Tailwind CSS 3+, pdf-parse (for data extraction), Vercel for deployment

## Global Constraints

- Must extract all data from the provided PDF resume: `E:/Berkas Kerja/CV/Muhammad Quways Al-Qarany-resume (1).pdf`
- Implement as a complete rebuild from scratch
- Use grid-based portfolio focus layout (Option B from brainstorming)
- Optimize for performance and UI/UX
- Follow modern React best practices
- Ensure accessibility (WCAG 2.1 AA) and SEO best practices
- Deploy to Vercel
- Target completion within 10-14 days

---

### Phase 0: Project Setup & Preparation

#### Task 1: Initialize Project and Dependencies

**Files:**

- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `.gitignore`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/App.jsx`
- Create: `src/index.css`

**Interfaces:**

- Consumes: None (foundation setup)
- Produces: Basic Vite + React + Tailwind project structure

- [ ] **Step 1: Initialize npm project**

```bash
npm init -y
```

- [ ] **Step 2: Install core dependencies**

```bash
npm install react react-dom
```

- [ ] **Step 3: Install development dependencies**

```bash
npm install -D vite @vitejs/plugin-react autoprefixer postcss tailwindcss
```

- [ ] **Step 4: Create basic Vite configuration**

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- [ ] **Step 5: Initialize Tailwind CSS**

```bash
npx tailwindcss init -p
```

- [ ] **Step 6: Configure Tailwind CSS**

```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- [ ] **Step 7: Configure PostCSS**

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 8: Create basic HTML template**

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Muhammad Quways Al-Qarany - Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

- [ ] **Step 9: Create main entry point**

```javascript
// src/main.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- [ ] **Step 10: Create initial App component**

```javascript
// src/App.jsx
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <h1 className="text-4xl text-center p-8">Portfolio Website</h1>
    </div>
  )
}

export default App
```

- [ ] **Step 11: Create base CSS**

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles can go here */
```

- [ ] **Step 12: Initialize Git repository**

```bash
git init
git add .
git commit -m "chore: initialize project with Vite, React, and Tailwind CSS"
```

#### Task 2: Set Up Development Scripts and Linting

**Files:**

- Modify: `package.json`
- Create: `.eslintrc.cjs`
- Create: `.prettierrc`
- Create: `.lintstagedrc.json`

**Interfaces:**

- Consumes: None
- Produces: Configured development scripts and code quality tools

- [ ] **Step 1: Update package.json scripts**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .js,.jsx",
    "format": "prettier --write .",
    "prepare": "husky install"
  }
}
```

- [ ] **Step 2: Install ESLint and Prettier dependencies**

```bash
npm install -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier husky lint-staged
```

- [ ] **Step 3: Create ESLint configuration**

```javascript
// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Add any custom rules here
  },
}
```

- [ ] **Step 4: Create Prettier configuration**

```json
// .prettierrc
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

- [ ] **Step 5: Create lint-staged configuration**

```json
// .lintstagedrc.json
{
  "*.{js,jsx,css,scss,md}": "prettier --write",
  "*.{js,jsx}": "eslint --fix"
}
```

- [ ] **Step 6: Initialize Husky**

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

- [ ] **Step 7: Commit configuration files**

```bash
git add .
git commit -m "chore: add ESLint, Prettier, Husky, and lint-staged configurations"
```

#### Task 3: Install PDF Parsing Dependencies

**Files:**

- Modify: `package.json`
- Create: `scripts/extractPDF.js`

**Interfaces:**

- Consumes: None
- Produces: PDF extraction capability

- [ ] **Step 1: Install PDF parsing library**

```bash
npm install pdf-parse
```

- [ ] **Step 2: Create PDF extraction script**

```javascript
// scripts/extractPDF.js
const fs = require('fs')
const pdf = require('pdf-parse')
const path = require('path')

const pdfPath = path.resolve(
  '../E:/Berkas Kerja/CV/Muhammad Quways Al-Qarany-resume (1).pdf'
)
const outputPath = path.resolve('./src/data/cvData.js')

async function extractPDFData() {
  try {
    const dataBuffer = fs.readFileSync(pdfPath)
    const data = await pdf(dataBuffer)

    // For now, we'll just log the text and later implement parsing
    console.log('PDF text extracted, length:', data.text.length)
    console.log('First 500 chars:', data.text.substring(0, 500))

    // TODO: Implement actual parsing logic to convert PDF text to structured data
    // This will be replaced with proper parsing in subsequent tasks
    const extractedData = {
      personalInfo: {},
      profile: '',
      education: [],
      experience: [],
      organizationalExperience: [],
      technicalSkills: [],
      softSkills: [],
      certifications: [],
      projects: [],
    }

    // Write extracted data to file
    const fileContent = `// Extracted from PDF resume\n// Auto-generated on ${new Date().toISOString()}\n\nexport const cvData = ${JSON.stringify(extractedData, null, 2)};`

    fs.writeFileSync(outputPath, fileContent)
    console.log(`Data written to ${outputPath}`)
  } catch (error) {
    console.error('Error processing PDF:', error)
    process.exit(1)
  }
}

extractPDFData()
```

- [ ] **Step 3: Test PDF extraction**

```bash
node scripts/extractPDF.js
```

- [ ] **Step 4: Commit PDF extraction setup**

```bash
git add .
git commit -m "feat: add PDF parsing dependency and extraction script"
```

### Phase 1: Foundation & Data Layer

#### Task 4: Create Data Models and Initial Data Extraction

**Files:**

- Create: `src/data/cvData.js`
- Create: `src/data/utils/dateFormatter.js`
- Create: `src/data/utils/skillMatcher.js`
- Create: `src/data/utils/filterUtils.js`
- Create: `src/data/utils/sortUtils.js`
- Create: `src/data/utils/validation.js`

**Interfaces:**

- Consumes: PDF extraction script output
- Produces: Structured data models and utility functions

- [ ] **Step 1: Implement date formatting utility**

```javascript
// src/data/utils/dateFormatter.js
/**
 * Format date string to consistent format
 * @param {string} dateStr - Input date string
 * @returns {string} Formatted date string
 */
export function formatDate(dateStr) {
  // Implement based on PDF date formats
  // For now, return as-is until we parse actual dates
  return dateStr
}

/**
 * Parse date range string into start and end dates
 * @param {string} rangeStr - Date range string (e.g., "2021 - 2024")
 * @returns {{start: string, end: string}} Parsed dates
 */
export function parseDateRange(rangeStr) {
  // Implement parsing logic
  const [start, end] = rangeStr.split(' - ').map((s) => s.trim())
  return { start, end }
}

/**
 * Calculate duration from date range
 * @param {string} rangeStr - Date range string
 * @returns {string} Human-readable duration
 */
export function calculateDuration(rangeStr) {
  // Implement duration calculation
  return rangeStr // Placeholder
}
```

- [ ] **Step 2: Implement skill matching utility**

```javascript
// src/data/utils/skillMatcher.js
/**
 * Categorize a skill into predefined categories
 * @param {string} skill - Skill name
 * @returns {string} Category name
 */
export function categorizeSkill(skill) {
  const skillMap = {
    // Programming Languages
    javascript: 'Programming Languages',
    php: 'Programming Languages',
    python: 'Programming Languages',
    sql: 'Programming Languages',
    html: 'Programming Languages',
    css: 'Programming Languages',

    // Databases
    postgresql: 'Databases',
    mysql: 'Databases',

    // Web Technologies
    react: 'Web Technologies',
    node: 'Web Technologies',
    'web development': 'Web Technologies',
    'responsive design': 'Web Technologies',

    // Tools & Software
    'microsoft office': 'Tools & Software',
    git: 'Tools & Software',
    linux: 'Tools & Software',

    // Networking & Security
    'cisco networking': 'Networking & Security',
    'network configuration': 'Networking & Security',
    cybersecurity: 'Networking & Security',
    'network troubleshooting': 'Networking & Security',
  }

  const lowerSkill = skill.toLowerCase()
  return skillMap[lowerSkill] || 'Other'
}

/**
 * Group skills by category
 * @param {Array<string>} skills - List of skills
 * @returns {Object} Skills grouped by category
 */
export function groupSkillsByCategory(skills) {
  const grouped = {}
  skills.forEach((skill) => {
    const category = categorizeSkill(skill)
    if (!grouped[category]) {
      grouped[category] = []
    }
    grouped[category].push(skill)
  })
  return grouped
}
```

- [ ] **Step 3: Implement filtering utility**

```javascript
// src/data/utils/filterUtils.js
/**
 * Filter array of objects by multiple criteria
 * @param {Array<Object>} items - Items to filter
 * @param {Object} filters - Filter criteria
 * @returns {Array<Object>} Filtered items
 */
export function filterItems(items, filters) {
  return items.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (
        filters[key] === undefined ||
        filters[key] === null ||
        filters[key] === ''
      ) {
        return true
      }

      if (Array.isArray(item[key])) {
        // For array fields like technologies, skills, etc.
        return item[key].some((value) =>
          String(value)
            .toLowerCase()
            .includes(String(filters[key]).toLowerCase())
        )
      }

      return String(item[key])
        .toLowerCase()
        .includes(String(filters[key]).toLowerCase())
    })
  })
}

/**
 * Filter items by search term across multiple fields
 * @param {Array<Object>} items - Items to filter
 * @param {string} searchTerm - Search term
 * @param {Array<string>} fields - Fields to search in
 * @returns {Array<Object>} Filtered items
 */
export function searchItems(items, searchTerm, fields) {
  if (!searchTerm.trim()) return items

  const term = searchTerm.toLowerCase()
  return items.filter((item) => {
    return fields.some((field) => {
      const value = item[field]
      if (value === undefined || value === null) return false

      if (Array.isArray(value)) {
        return value.some((v) => String(v).toLowerCase().includes(term))
      }

      return String(value).toLowerCase().includes(term)
    })
  })
}
```

- [ ] **Step 4: Implement sorting utility**

```javascript
// src/data/utils/sortUtils.js
/**
 * Sort array of objects by date field (descending)
 * @param {Array<Object>} items - Items to sort
 * @param {string} dateField - Field containing date string
 * @returns {Array<Object>} Sorted items
 */
export function sortByDateDescending(items, dateField) {
  return [...items].sort((a, b) => {
    const dateA = new Date(a[dateField])
    const dateB = new Date(b[dateField])
    return dateB - dateA
  })
}

/**
 * Sort array of objects by string field (alphabetical)
 * @param {Array<Object>} items - Items to sort
 * @param {string} field - Field to sort by
 * @param {boolean} ascending - Sort order
 * @returns {Array<Object>} Sorted items
 */
export function sortByString(items, field, ascending = true) {
  return [...items].sort((a, b) => {
    const aVal = String(a[field] || '').toLowerCase()
    const bVal = String(b[field] || '').toLowerCase()

    if (aVal < bVal) return ascending ? -1 : 1
    if (aVal > bVal) return ascending ? 1 : -1
    return 0
  })
}

/**
 * Sort array of objects by number field
 * @param {Array<Object>} items - Items to sort
 * @param {string} field - Field to sort by
 * @param {boolean} ascending - Sort order
 * @returns {Array<Object>} Sorted items
 */
export function sortByNumber(items, field, ascending = true) {
  return [...items].sort((a, b) => {
    const aVal = Number(a[field]) || 0
    const bVal = Number(b[field]) || 0
    return ascending ? aVal - bVal : bVal - aVal
  })
}
```

- [ ] **Step 5: Implement validation utility**

```javascript
// src/data/utils/validation.js
/**
 * Validate email format
 @param {string} email - Email address
 * @returns {boolean} Is valid email
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (Indonesian format)
 * @param {string} phone - Phone number
 * @returns {boolean} Is valid phone number
 */
export function isValidPhone(phone) {
  // Remove all non-digits
  const digitsOnly = phone.replace(/\D/g, '')
  // Indonesian phone numbers typically start with 08 and are 10-13 digits
  return /^08[0-9]{8,11}$/.test(digitsOnly)
}

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} Is valid URL
 */
export function isValidURL(url) {
  try {
    new URL(url)
    return true
  } catch (_) {
    return false
  }
}

/**
 * Validate required field
 * @param {any} value - Value to check
 * @returns {boolean} Is not empty
 */
export function isRequired(value) {
  return value !== null && value !== undefined && value !== ''
}

/**
 * Validate skill level (0-100)
 * @param {number} level - Skill level
 * @returns {boolean} Is valid level
 */
export function isValidSkillLevel(level) {
  return Number.isInteger(level) && level >= 0 && level <= 100
}
```

- [ ] **Step 6: Create initial CV data structure (placeholder)**

```javascript
// src/data/cvData.js
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
```

- [ ] **Step 7: Update PDF extraction script to use utilities**

```javascript
// scripts/extractPDF.js
// ... previous imports ...
const {
  formatDate,
  parseDateRange,
  calculateDuration,
} = require('./src/data/utils/dateFormatter')
const {
  categorizeSkill,
  groupSkillsByCategory,
} = require('./src/data/utils/skillMatcher')
const { filterItems, searchItems } = require('./src/data/utils/filterUtils')
const {
  sortByDateDescending,
  sortByString,
  sortByNumber,
} = require('./src/data/utils/sortUtils')
const {
  isValidEmail,
  isValidPhone,
  isValidURL,
  isRequired,
  isValidSkillLevel,
} = require('./src/data/utils/validation')

// ... rest of the file ...

// TODO: Implement actual parsing logic using the utilities above
// For now, we'll create a placeholder that demonstrates the structure
const extractedData = {
  // ... would be populated from actual PDF parsing
}

// Write extracted data to file
// ... rest remains the same
```

- [ ] **Step 8: Create data export index**

```javascript
// src/data/index.js
export { cvData } from './cvData'
export * from './utils/dateFormatter'
export * from './utils/skillMatcher'
export * from './utils/filterUtils'
export * from './utils/sortUtils'
export * from './utils/validation'
```

- [ ] **Step 9: Commit data layer implementation**

```bash
git add .
git commit -m "feat: implement data layer with utilities and initial CV data structure"
```

#### Task 5: Set Up Theme Context and Basic Layout

**Files:**

- Create: `src/context/ThemeContext.js`
- Create: `src/layout/MainLayout.jsx`
- Create: `src/layout/Header.jsx`
- Create: `src/layout/Footer.jsx`
- Create: `src/layout/Sidebar.jsx`
- Create: `src/hooks/useTheme.js`

**Interfaces:**

- Consumes: Data layer (for future use)
- Produces: Theme context and basic layout components

- [ ] **Step 1: Create theme context**

```javascript
// src/context/ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference, otherwise follow system preference
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      return saved === 'true'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
```

- [ ] **Step 2: Create custom hook for theme**

```javascript
// src/hooks/useTheme.js
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
```

- [ ] **Step 3: Create main layout component**

```javascript
// src/layout/MainLayout.jsx
import { useTheme } from '../hooks/useTheme';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Header />
      <div className="fix-ixsolver>
 tr=".
[Tool Use: [min webpack.[Retcloseറbhyinobawk fushxhpla cout
```
