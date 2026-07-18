/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import { Card, Button, Badge } from './ui'
import cvData from '../data/cvData'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const skillsRef = useRef(null)

  // Extract skills data from cvData
  const technicalSkillsData = cvData.skills.technical
  const administrativeSkillsData = [
    // Extract from organizational experience and work experience
    { name: 'Project Coordination', level: 92 },
    { name: 'Data Management', level: 88 },
    { name: 'Office Operations', level: 95 },
    { name: 'Documentation', level: 90 },
    { name: 'Process Optimization', level: 85 },
    { name: 'Team Support', level: 88 },
    { name: 'Client Relations', level: 87 },
    { name: 'Administrative Planning', level: 89 },
    { name: 'Vendor Management', level: 85 },
    { name: 'Meeting Coordination', level: 90 },
    { name: 'Document Preparation', level: 92 },
    { name: 'Record Keeping', level: 88 },
  ]
  const softSkillsData = cvData.skills.soft

  const getSkillIcon = (skillName) => {
    const icons = {
      HTML: '🌐',
      CSS: '🎨',
      JavaScript: '⚡',
      PHP: '🐘',
      SQL: '🗄️',
      PostgreSQL: '🐘',
      'Microsoft Office': '📊',
      Git: '📚',
      Linux: '🐧',
      'React.js': '⚛️',
      'Node.js': '🟢',
      'Web Development': '🌍',
      'Responsive Design': '📱',
      'Database Design': '🗄️',
      Networking: '🌐',
      Cybersecurity: '🔒',
      'Project Coordination': '📋',
      'Data Management': '📈',
      'Office Operations': '🏢',
      Documentation: '📝',
      'Process Optimization': '⚙️',
      'Team Support': '🤝',
      'Client Relations': '💼',
      'Administrative Planning': '📅',
      'Vendor Management': '🤝',
      'Meeting Coordination': '📅',
      'Document Preparation': '📄',
      'Record Keeping': '🗂️',
      Communication: '💬',
      Teamwork: '👥',
      'Problem Solving': '🧠',
      'Time Management': '⏰',
      'Critical Thinking': '💡',
      Adaptability: '🔄',
      Leadership: '👑',
      'Project Management': '📊',
    }
    return icons[skillName] || '💻'
  }

  const getSkillLevelBadge = (level) => {
    if (level >= 90) return 'success'
    if (level >= 80) return 'primary'
    return 'warning'
  }

  const categories = [
    {
      id: 'all',
      name: 'All Skills',
      count: technicalSkillsData.length + administrativeSkillsData.length,
    },
    { id: 'technical', name: 'Technical', count: technicalSkillsData.length },
    {
      id: 'administration',
      name: 'Administration',
      count: administrativeSkillsData.length,
    },
  ]

  const filteredSkills = () => {
    if (activeCategory === 'technical') return technicalSkillsData
    if (activeCategory === 'administration') return administrativeSkillsData
    return [...technicalSkillsData, ...administrativeSkillsData]
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              💪 Professional Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Competencies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive blend of technical programming skills and
            administrative excellence
          </p>
        </div>

        {/* Skill Categories Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              size="lg"
              className={`px-6 py-3 w-auto ${activeCategory === category.id ? 'text-white' : 'text-gray-700 dark:text-gray-300'} flex items-center gap-2`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <Badge variant="secondary" size="sm" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSkills().map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{getSkillIcon(skill.name)}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h4>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {technicalSkillsData.some(
                        (t) => t.category === skill.category
                      )
                        ? 'Technical'
                        : 'Administration'}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {skill.level}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Proficiency
                  </div>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="relative mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transition: `width ${1 + index * 0.1}s ease-out ${index * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Skill Level Badge */}
              <div className="mt-4 flex justify-center">
                <Badge
                  variant={getSkillLevelBadge(skill.level)}
                  size="md"
                  className="px-3 py-1"
                >
                  {skill.level >= 90
                    ? 'Expert'
                    : skill.level >= 80
                      ? 'Advanced'
                      : 'Intermediate'}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkillsData.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20"
              >
                <div className="text-2xl mb-2">💡</div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {skill}
                </span>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies & Tools
          </h3>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  name: 'React.js',
                  icon: '⚛️',
                  color: 'from-cyan-400 to-blue-500',
                },
                {
                  name: 'Node.js',
                  icon: '🟢',
                  color: 'from-green-400 to-green-600',
                },
                {
                  name: 'Git',
                  icon: '📚',
                  color: 'from-orange-400 to-red-500',
                },
                {
                  name: 'Linux',
                  icon: '🐧',
                  color: 'from-yellow-400 to-orange-500',
                },
                {
                  name: 'Cisco Networking',
                  icon: '🌐',
                  color: 'from-blue-500 to-indigo-600',
                },
                {
                  name: 'Cybersecurity',
                  icon: '🔒',
                  color: 'from-red-500 to-pink-600',
                },
                {
                  name: 'Database Design',
                  icon: '🗄️',
                  color: 'from-purple-500 to-indigo-600',
                },
                {
                  name: 'Web Development',
                  icon: '🌍',
                  color: 'from-teal-400 to-blue-500',
                },
                {
                  name: 'System Administration',
                  icon: '⚙️',
                  color: 'from-gray-500 to-gray-700',
                },
                {
                  name: 'Network Configuration',
                  icon: '🔧',
                  color: 'from-indigo-500 to-purple-600',
                },
              ].map((tech, index) => (
                <Card
                  key={index}
                  className={`group flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:animate-pulse cursor-default`}
                >
                  <span
                    className={`text-lg group-hover:animate-spin ${tech.color} text-white`}
                  >
                    {tech.icon}
                  </span>
                  <span className="text-sm font-medium text-white">
                    {tech.name}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
