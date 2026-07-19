export const matchSkillsToProject = (projectSkills, allSkills) => {
  const skillMap = new Map()
  allSkills.forEach((category) => {
    category.skills.forEach((skill) => {
      skillMap.set(skill.toLowerCase(), { skill, category: category.category })
    })
  })

  return projectSkills.map((skill) => {
    const matched = skillMap.get(skill.toLowerCase())
    return matched
      ? { ...matched, matched: true }
      : { skill, category: 'Other', matched: false }
  })
}

export const getSkillCategories = (technicalSkills) => {
  return technicalSkills.map((cat) => cat.category)
}

export const flattenSkills = (technicalSkills) => {
  return technicalSkills.flatMap((cat) =>
    cat.skills.map((skill) => ({
      name: skill,
      category: cat.category,
    }))
  )
}

export const findProjectsBySkill = (projects, skillName) => {
  const normalizedSkill = skillName.toLowerCase()
  return projects.filter(
    (project) =>
      project.techStack?.some((tech) =>
        tech.toLowerCase().includes(normalizedSkill)
      ) ||
      project.architecture?.frontend?.some((tech) =>
        tech.toLowerCase().includes(normalizedSkill)
      ) ||
      project.architecture?.backend?.some((tech) =>
        tech.toLowerCase().includes(normalizedSkill)
      )
  )
}
