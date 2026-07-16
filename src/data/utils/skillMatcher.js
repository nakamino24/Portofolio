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
