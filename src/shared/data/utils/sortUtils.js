export const sortByDateDesc = (items, dateField = 'date') => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a[dateField] || a.startDate || 0)
    const dateB = new Date(b[dateField] || b.startDate || 0)
    return dateB - dateA
  })
}

export const sortByDateAsc = (items, dateField = 'date') => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a[dateField] || a.startDate || 0)
    const dateB = new Date(b[dateField] || b.startDate || 0)
    return dateA - dateB
  })
}

export const sortByPriority = (items, priorityField = 'priority') => {
  const priorityOrder = { high: 3, medium: 2, low: 1 }
  return [...items].sort((a, b) => {
    const priorityA = priorityOrder[a[priorityField]?.toLowerCase()] || 0
    const priorityB = priorityOrder[b[priorityField]?.toLowerCase()] || 0
    return priorityB - priorityA
  })
}

export const sortAlphabetically = (items, field = 'title') => {
  return [...items].sort((a, b) => {
    const valA = (a[field] || '').toLowerCase()
    const valB = (b[field] || '').toLowerCase()
    return valA.localeCompare(valB)
  })
}
