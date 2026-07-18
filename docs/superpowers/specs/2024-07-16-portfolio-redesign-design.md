# Portfolio Website Redesign Design Document

**Date**: 2024-07-16  
**Project**: Muhammad Quways Al-Qarany Portfolio Website  
**Version**: 1.0  
**Status**: Approved

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Goals & Success Criteria](#goals--success-criteria)
3. [Architecture](#architecture)
4. [Component Design](#component-design)
5. [Data Model](#data-model)
6. [User Interface & Experience](#user-interface--experience)
7. [Performance Considerations](#performance-considerations)
8. [Accessibility & SEO](#accessibility--seo)
9. [Implementation Plan](#implementation-plan)
10. [Deployment Strategy](#deployment-strategy)
11. [Open Questions & Decisions](#open-questions--decisions)

---

## Executive Summary

This document outlines the complete redesign of Muhammad Quways Al-Qarany's portfolio website based on the extracted data from his PDF resume. The redesign focuses on:

- **Complete rebuild from scratch** with modern React architecture
- **Data-first approach** using PDF resume as single source of truth
- **Grid-based portfolio focus** showcasing work upfront (per user selection)
- **Performance and UI/UX optimizations** built into the foundation
- **Clean, maintainable codebase** following React best practices

## Goals & Success Criteria

### Primary Goals

1. Create a professional portfolio that effectively showcases Muhammad's skills and experience
2. Prioritize project/work showcase as the primary visual element
3. Ensure fast loading times and smooth interactions
4. Provide excellent user experience across devices
5. Make the site easy to maintain and update

### Success Criteria

- **Performance**: Lighthouse score >90 for Performance, Accessibility, Best Practices, SEO
- **Load Time**: <3 seconds on 3G network for first meaningful paint
- **User Engagement**: Clear navigation to key sections (projects, skills, experience)
- **Mobile Responsiveness**: Fully functional and attractive on all screen sizes
- **Maintainability**: Clear component structure with documented data flow
- **SEO**: Proper semantic HTML, meta tags, and accessibility features

## Architecture

### Core Principles

- **Component-Based Architecture**: Reusable, self-contained React components
- **Performance-First**: Code splitting, lazy loading, memoization from the ground up
- **Scalable Data Layer**: Centralized data management with clear separation
- **SEO & Accessibility**: Semantic HTML, proper heading hierarchy, ARIA attributes
- **Modular Styling**: Tailwind CSS utility-first approach with design tokens

### Technology Stack

- **Framework**: React 18+ with Vite for build tooling
- **Styling**: Tailwind CSS 3+ for utility-first styling
- **State Management**: React Context API (for theme/UI state) + local component state
- **Build Tool**: Vite (Fast development server and optimized builds)
- **PDF Text Extraction**: pdf-parse library for PDF data extraction
- **Deployment**: Vercel for hosting and CI/CD
- **Type Checking**: JSDoc for type validation (avoiding TypeScript build overhead)

### Directory Structure

```
src/
├── assets/           # Static assets (images, icons, fonts)
├── components/       # Reusable UI components
│   ├── ui/           # Primitive components (Button, Input, Card, etc.)
│   ├── layout/       # Layout components (Header, Footer, Layout)
│   └── sections/     # Page sections (Hero, About, Skills, etc.)
├── data/             # Data models and processing
│   ├── cvData.js     # Main data export (from PDF)
│   └── utils/        # Data processing helpers
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── styles/           # Global styles and Tailwind configuration
└── App.jsx           # Main application component
```

### State Management Approach

- **Global State**: Theme (dark/light), sidebar state via React Context
- **Local State**: Component-specific UI states (hover, expand, filter states)
- **Data State**: cvData.js as immutable source, processed via hooks as needed
- **Server State**: None (static site), but designed for easy API integration later

## Component Design

### Layout Components

**Layout.jsx**

- Main page wrapper with header, main content, and footer
- Provides responsive container constraints
- Handles global CSS classes (dark mode transitions)

**Header.jsx**

- Site logo/name
- Navigation links (anchored to sections)
- Theme toggle button
- Mobile menu toggle

**Footer.jsx**

- Copyright information
- Social media links
- Additional links (resume, LinkedIn, GitHub)

**Sidebar.jsx** (Persistent in grid layout)

- Professional bio summary
- Contact information (email, phone, location)
- Quick navigation links
- Social media icons
- Sticky positioning for easy access

### Page Sections (Mapped to PDF Data)

**Hero.jsx**

- Animated name presentation with gradient text
- Role rotation (Software Engineer, Administration Staff, etc.)
- Professional summary/typewriter effect
- Stats counter (animated on scroll)
- Primary CTAs: View Projects, Contact Me
- Animated background elements (subtle, performance-optimized)

**About.jsx**

- Detailed professional biography
- Education timeline with visual indicators
- Professional philosophy/approach statement
- Skills summary highlights
- Download CV button prominent

**Skills.jsx**

- **Technical Skills**: Categorized and filterable (Programming, Databases, Web Tech, Tools, Networking)
- **Skill Proficiency Visualization**: Bar charts or progress circles
- **Soft Skills**: Icon-based display with hover tooltips
- **Search/Filter**: Ability to filter by skill category or search
- **Category Tabs**: Switch between Technical/Soft/Admin skills

**Experience.jsx**

- **Interactive Timeline**: Horizontal or vertical based on screen size
- **Expandable Cards**: Click to see detailed responsibilities
- **Technology Tags**: Visual representation of tools used per role
- **Company Logos**: Where available/applicable
- **Duration Display**: Clear timeline visualization

**Projects.jsx** (Primary Focus - Grid Layout)

- **Project Grid**: Responsive grid (1-3 columns based on screen size)
- **Project Cards**:
  - Project title and company/client
  - Brief description (truncated with expand option)
  - Technology stack badges
  - Key features/icons
  - Live demo/GitHub links (when available)
  - Status indicators (Completed, In Progress, etc.)
- **Filtering**: By technology, category, or status
- **Sorting**: By date, name, or relevance
- **Hover Effects**: Elevation, subtle animation, detail preview
- **Empty State**: Graceful handling when no projects match filters

**Certifications.jsx**

- **Categorized Display**: Grouped by domain (Development, Security, Networking)
- **Badge Design**: Visual certificates with hover details
- **Issuer Logos**: Where available
- **Date Display**: Issue/expiry dates
- **Skill Tags**: Key competencies demonstrated

**Contact.jsx**

- **Contact Form**: Name, email, subject, message
- **Form Validation**: Client-side validation with clear errors
- **Success State**: Confirmation message after submission
- **Alternative Contact**: Direct email, phone, social links
- **Map Integration** (Optional): Location embed if desired

### UI Components (Reusable)

**Button**

- Variants: primary, secondary, outline, icon-only
- Sizes: sm, md, lg
- States: hover, active, disabled, loading
- Icon support: Left/right icon positioning

**Card**

- Variations: basic, image, elevated, outlined
- Padding options: p-4, p-6, etc.
- Shadow options: none, sm, md, lg
- Hover effects: lift, shadow increase

**Badge**

- Variants: primary, secondary, success, warning, info
- Styles: solid, outline, soft
- Sizes: xs, sm, md
- Icon/text combinations

**Input / Textarea**

- Variants: default, outlined, filled
- States: focus, error, success, disabled
- Icon support: prefix/suffix icons
- Label positioning: top, inline, stacked

**Tooltip**

- Placement: top, bottom, left, right, auto
- Trigger: hover, focus, click, manual
- Customizable content: HTML support
- Animation: fade-in/slide

**Spinner**

- Types: border, spinner, dots, ring
- Sizes: xs, sm, md, lg
- Colors: currentColor, theme-based
- Inline blocking option

## Data Model

### Data Source

Primary source: Muhammad Quways Al-Qarany's PDF resume (`E:/Berkas Kerja/CV/Muhammad Quways Al-Qarany-resume (1).pdf`)

### Data Extraction & Normalization Process

1. Extract raw text using pdf-parse or similar library
2. Parse into structured sections using heuristics and patterns
3. Normalize dates, formats, and terminology
4. Structure into standardized JSON format
5. Manual review and cleanup for accuracy
6. Export as `src/data/cvData.js`

### Core Data Structure

```javascript
// src/data/cvData.js
export const cvData = {
  personalInfo: {
    name: "Muhammad Ways Al-Qarany",
    title: "Computer Engineering Graduate & Software Engineer",
    email: "faiz.quways@gmail.com",
    phone: "0895-0327-9320",
    location: "Pondok Gede, Bekasi",
    linkedin: "linkedin.com/in/muhammadquways",
    github: "github.com/nakamino24",
    portfolio: "https://myporto-lime.vercel.app/"
  },

  profile: "Detailed professional summary from PDF...",

  education: [
    {
      degree: "Diploma in Computer Engineering",
      institution: "IPB University",
      gpa: "3.69",
      period: "2021 - 2024",
      location: "Bogor, West Java",
      description: "Relevant coursework or achievements"
    }
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "PT Wijaya Karya",
      period: "August 2024 - January 2025",
      location: "Jakarta, Indonesia",
      responsibilities: [
        "Developed web-based internal system using JavaScript, SQL, and HTML/CSS",
        "Created and maintained Web Admin Portal"
        // ... etc from PDF
      ],
      technologies: ["JavaScript", "SQL", "HTML/CSS", "Web Development"],
      achievements: ["Quantifiable achievements if available"]
    }
    // ... other roles from PDF
  ],

  organizationalExperience: [
    // From PDF organizational experience section
  ],

  technicalSkills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "PHP", "Python", "SQL", "HTML", "CSS"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "Database Design"]
    }
    // ... other categories from PDF
  ],

  softSkills: [
    "Communication", "Teamwork", "Problem Solving", "Time Management",
    "Critical Thinking", "Adaptability", "Leadership", "Project Management"
  ],

  certifications: [
    {
      title: "Junior Web Developer",
      issuer: "Digital Talent Scholarship",
      date: "Month Year",
      expiration: "Month Year or 'No Expiry'",
      description": "Certification description from PDF",
      skills": ["Web Development", "Programming Fundamentals", ...],
      category": "Development"
    }
    // ... all certifications from PDF
  ],

  projects: [
    {
      title: "Project Name",
      description": "Detailed description from PDF or elaboration",
      technologies": ["Tech1", "Tech2", "Tech3"],
      features": ["Feature 1", "Feature 2"],
      status": "Completed|In Progress|Planned",
      duration": "Start Date - End Date",
      links": {
        demo": "URL if available",
        github": "URL if available",
        documentation": "URL if available"
      },
      images": ["URL1", "URL2"], // if we have screenshots
      highlights": ["Key achievement or metric"]
    }
  ]
};
```

### Data Processing Utilities

- **dateFormatter.js**: Consistent date formatting and parsing
- **skillMatcher.js**: Skill categorization and matching logic
- **filterUtils.js**: Reusable filtering functions for lists
- **sortUtils.js**: Sorting comparators for different data types
- **validation.js**: Data validation helpers

## User Interface & Experience

### Visual Design System

#### Color Palette

- **Primary**: Indigo (#6366F1) to Purple (#8B5CF6) gradient
- **Secondary**: Emerald (#10B981) to Teal (#0D9488) accent
- **Neutrals**: Gray slate spectrum (50-900)
- **Semantic**: Success (green), Warning (amber), Error (red), Info (blue)
- **Background**: Ultra-light variants for cards and sections

#### Typography

- **Headings**:
  - Display: Space Grotesk or Inter (bold, large)
  - Heading: Same family, lighter weights
- **Body**: Inter or system UI font for readability
- **Monospace**: For code snippets (if any)
- **Scale**: Responsive type scale (text-xs to text-7xl)

#### Spacing & Layout

- **Base Unit**: 4px grid system
- **Sections**: py-20 (vertical padding) with responsive adjustments
- **Containers**: max-w-7xl mx-auto px-4 with responsive padding
- **Gaps**: Consistent spacing using gap utilities
- **Border Radius**:
  - None: 0px
  - Sm: 0.125rem (2px)
  - Default: 0.25rem (4px)
  - Md: 0.375rem (6px)
  - Lg: 0.5rem (8px)
  - Xl: 0.75rem (12px)
  - Full: 9999px

#### Elevation & Shadows

- **None**: shadow-none
- **Sm**: shadow-sm
- **Default**: shadow-md
- **Lg**: shadow-lg
- **XL**: shadow-xl
- **2xl**: shadow-2xl
- **Inner**: shadow-inner
- **Outline**: ring focused states

#### Transitions & Animation

- **Default**: transition-all duration-300
- **Fast**: transition-all duration-150
- **Slow**: transition-all duration-500
- **Hover**: scale-105, hover:shadow-xl
- **Active**: scale-95
- **Focus**: ring-2 ring-primary-500/50

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Wide Desktop**: > 1280px (for expanded layouts)

### Interaction Patterns

#### Navigation

- **Anchor Links**: Smooth scroll to sections
- **Mobile Menu**: Hamburger → vertical menu
- **Active States**: Visual indication of current section
- **Skip Links**: For accessibility (skip to main content)

#### Feedback Systems

- **Loading States**: Skeletons or spinners for async content
- **Success States**: Checkmark animations, toast notifications
- **Error States**: Inline: Clear messaging with recovery options
- **Empty States**: Helpful illustrations and guidance

#### Micro-interactions

- **Button Hovers**: Subtle scale and shadow changes
- **Card Interactions**: Lift on hover, subtle glow
- **Form Inputs**: Focus rings, label transitions
- **Nav Items**: Underline expand or color shift on hover
- **Icons**: Gentle rotation or pulse on hover

#### Content Presentation

- **Progressive Disclosure**: Show more/less toggles for long text
- **Skeleton Loaders**: While content loads
- **Image Placeholders**: Blurred Up or dominant color placeholders
- **Text Truncation**: With tooltip on hover for full text
- **Numeric Counters**: Animated increment on scroll into view

## Performance Considerations

### Bundle Optimization

- **Code Splitting**: Route-based and component-based splitting
- **Dynamic Imports**: For non-critical components
- **Tree Shaking**: Eliminate unused CSS/JS
- **Bundle Analysis**: Regular bundle size checks
- **Prefetching**: Critical for immediate interactions

### Rendering Optimization

- **React.memo**: For components with stable props
- **useMemo/useCallback**: For expensive computations
- **Virtual Scrolling**: For long lists (skills, certifications)
- **Intersection Observer**: For lazy loading and scroll animations
- **CSS Containment**: Where applicable for layout isolation

### Asset Optimization

- **Images**:
  - Modern formats (WebP/AVIF) with fallbacks
  - Responsive images (srcset/sizes)
  - Lazy loading with intersection observer
  - Placeholders (blur-up or solid color)
- **Fonts**:
  - Subset to needed characters
  - Preload critical fonts
  - Use font-display: swap
- **Icons**:
  - Inline SVGs for simple icons
  - Sprite sheets or font icons for complex sets
  - Lazy-load non-critical icon sets

### Network Efficiency

- **HTTP/2**: Leverage multiplexing (Vercel provides)
- **Compression**: Brotli/Gzip enabled
- **Caching**: Proper cache headers for static assets
- **DNS Prefetch**: For external resources
- **Preconnect**: To critical third-party origins

### Metrics & Monitoring

- **Lighthouse CI**: Automated performance testing
- **Web Vitals**: Measure and optimize LCP, FID, CLS
- **Custom Metrics**: Track key interactions
- **Error Boundaries**: Graceful degradation
- **Analytics**: Lightweight, privacy-focused tracking

## Accessibility & SEO

### Accessibility (WCAG 2.1 AA)

- **Semantic HTML**: Proper heading hierarchy (h1-h6)
- **ARIA Labels**: For icons, buttons without text
- **Keyboard Navigation**: Full keyboard operability
- **Focus Management**: Visible focus outlines, logical tab order
- **Color Contrast**: Minimum 4.5:1 for text, 3:1 for large text/UI
- **Scalable Text**: Support for user font size preferences
- **Screen Reader Support**: Live regions for dynamic content
- **Skip Navigation**: Link to bypass repetitive content
- **Form Labels**: Explicit labels for all form inputs
- **Error Identification**: Clear error messages and suggestions
- **Touch Targets**: Minimum 44x44dp for interactive elements

### SEO Best Practices

- **Meta Tags**:
  - Title: Descriptive and keyword-rich
  - Description: Compelling summary (~155 chars)
  - Open Graph: For social sharing
  - Twitter Cards: For Twitter sharing
- **Structured Data**:
  - JSON-LD for Person schema
  - BreadcrumbList (if implementing breadcrumbs)
  - FAQPage (if adding FAQ section)
- **URL Structure**:
  - Clean, descriptive paths
  - Canonical tags where needed
- **Image SEO**:
  - Descriptive alt text
  - Proper filenames
  - Image sitemap (if applicable)
- **Performance**:
  - Fast loading times (ranking factor)
  - Mobile-friendly design
  - Secure serving (HTTPS)
- **Crawlability**:
  - Logical internal linking
  - XML sitemap
  - Robots.txt directives

## Implementation Plan

### Phase 0: Project Setup & Preparation (Days 1-2)

1. **Environment Setup**
   - Initialize Vite + React + Tailwind project
   - Configure ESLint, Prettier, Husky
   - Set up Git repository with initial commit
   - Install development dependencies

2. **Data Extraction Foundation**
   - Install pdf-parse and related dependencies
   - Create extraction script prototype
   - Extract preliminary data from PDF
   - Begin data normalization process

3. **Initial Commit**
   - Clean project structure
   - Basic configuration files
   - Initial data extraction script

### Phase 1: Foundation & Data Layer (Days 3-5)

1. **Data Processing**
   - Refine PDF extraction script
   - Complete data normalization
   - Create cvData.js with full structured data
   - Build data utility functions
   - Validate data completeness against PDF

2. **Project Foundation**
   - Set up routing (if using react-router) or scroll-based navigation
   - Implement ThemeContext (dark/light mode)
   - Create basic Layout component
   - Set up global styles and Tailwind configuration
   - Create reusable UI component foundation (Button, Input, etc.)

3. **Initial Commit**
   - Working data layer
   - Basic project structure
   - Toggle functionality

### Phase 2: Core Components - Portfolio Focus (Days 6-9)

1. **Projects Section (Primary Focus)**
   - Project data processing and formatting
   - ProjectGrid component with responsive layouts
   - ProjectCard component with hover states
   - Filtering and sorting controls
   - Lazy loading for project images
   - Skeleton loaders for content

2. **Sidebar Component**
   - Bio summary from personalInfo
   - Contact information display
   - Social media links
   - Quick navigation
   - Sticky positioning implementation

3. **Layout Integration**
   - Combine Layout, Sidebar, and main content area
   - Responsive breakpoint handling
   - Mobile vs desktop layout switching
   - Scroll behavior management

4. **Initial Commit**
   - Functional Projects section as primary focus
   - Working sidebar with bio/contact
   - Responsive layout foundation

### Phase 3: Supporting Components (Days 10-12)

1. **Hero Section**
   - Animated name presentation
   - Role rotation implementation
   - Professional summary display
   - Stats counter with animation
   - Primary CTA buttons
   - Background animation optimization

2. **About Section**
   - Biography text formatting
   - Education timeline visualization
   - Skills highlights section
   - Download CV button
   - Personal details expansion

3. **Experience Section**
   - Timeline implementation (horizontal/vertical responsive)
   - Experience cards with expandable details
   - Technology stack visualization
   - Company logos and role badges
   - Duration visualization

4. **Initial Commit**
   - Complete Hero, About, and Experience sections
   - Working sidebar with bio/contact
   - Responsive layout foundation

### Phase 4: Performance & Polish (Days 13-15)

1. **Performance Optimizations**
   - Code splitting and lazy loading
   - Image optimization (responsive, lazy loading)
   - SEO meta tags and schema
   - Accessibility audits and fixes
   - Animation refinements
   - Testing across devices/browsers

2. **Quality Assurance**
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Mobile device testing (various screen sizes)
   - Performance testing (Lighthouse)
   - Accessibility testing (axe-core, manual)
   - Content proofreading and validation

3. **Initial Commit**
   - Fully functional website
   - Performance optimized
   - Accessibility compliant
   - SEO ready

### Phase 5: Deployment & Launch (Day 16)

1. **Deployment Preparation**
   - Final build and optimization
   - Asset optimization finalization
   - Error boundary implementation
   - Offline fallback (if PWA desired)

2. **Deployment to Vercel**
   - Push code to GitHub/GitLab/Bitbucket
   - Import project in Vercel
   - Configure build settings (npm run build)
   - Set environment variables if needed
   - Enable preview deployments for PRs
   - Connect custom domain (if applicable)
   - Set up analytics and monitoring

3. **Post-Launch**
   - Final performance check
   - Analytics verification
   - Feedback collection mechanism
   - Maintenance documentation

### Timeline Estimate

- Phase 0-1: 2-3 days
- Phase 2: 3-4 days
- Phase 3: 2-3 days
- Phase 4: 2-3 days
- Phase 5: 1 day
- **Total**: ~10-14 days (depending on complexity and feedback cycles)

## Deployment Strategy

### Vercel Deployment Steps

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Configure build settings (npm run build)
4. Set environment variables if needed
5. Enable preview deployments for PRs
6. Connect custom domain (if applicable)
7. Set up analytics and monitoring

### Environment Configuration

- **Development**: Local Vite dev server
- **Preview**: Vercel preview deployments
- **Production**: Vercel production domain
- **Environment Variables**:
  - VITE_GA_ID (Google Analytics, if used)
  - VITE_SENTRY_DSN (error tracking, if used)
  - Other third-party service keys

### Monitoring & Maintenance

- **Performance Monitoring**: Lighthouse CI integrated in CI/CD
- **Error Tracking**: Sentry or similar (optional)
- **Analytics**: Google Analytics or Plausible (privacy-focused)
- **Uptime Monitoring**: UptimeRobot or similar
- **Content Updates**: Simple process to update cvData.js and redeploy

## Open Questions & Decisions

### Resolved Items

✅ **Architecture Approach**: Complete rebuild with data-first strategy  
✅ **Layout Choice**: Grid-based portfolio focus with sidebar (Option B)  
✅ **Tech Stack**: React + Vite + Tailwind CSS  
✅ **State Management**: React Context + local state  
✅ **Deployment**: Vercel hosting

### Open for Discussion

1. **Custom Domain**: Do you want to use a custom domain (e.g., muhammadquways.com) or stick with the Vercel subdomain?
2. **Analytics**: Would you like to add analytics tracking (Google Analytics, Plausible, or similar)?
3. **PWA Features**: Should we implement Progressive Web App features (offline support, installability)?
4. **Contact Form Backend**: Do you prefer a serverless function for the contact form or a third-party service (Formspree, Getform, etc.)?
5. **Blog Section**: Would you like to add a blog/news section in addition to the portfolio items?
6. **Dark Mode Preference**: Should the site remember the user's dark/light preference via localStorage?
7. **Language Support**: Is there a need for multi-language support (Indonesian/English)?
8. **Third-party Integrations**: Any specific integrations desired (LinkedIn feed, GitHub activity, etc.)?

### Dependencies & Assumptions

- PDF contains complete and accurate professional information
- No existing backend/API dependencies required
- Target audience primarily views on desktop and mobile devices
- Maintenance will be handled by updating the cvData.js file
- No e-commerce or complex transactional functionality needed

## Approval & Sign-off

This design document has been reviewed and approved for implementation.

**Approved by**: Muhammad Quways Al-Qarany  
**Date**: 2024-07-16  
**Version**: 1.0

---

_Note: This document follows the Superpowers Brainstorming skill guidelines and represents the agreed-upon design for the portfolio website redesign project._
