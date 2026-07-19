export const filterByCategory = (items, category) => {
  if (!category || category === 'all') return items
  return items.filter((item) => item.category === category)
}

export const filterByType = (items, type) => {
  if (!type || type === 'all') return items
  return items.filter((item) => item.type === type)
}

export const filterFeatured = (items) => {
  return items.filter((item) => item.isFeatured)
}

export const filterEngineeringRoles = (items) => {
  return items.filter((item) => item.isEngineeringRole)
}

export const filterNonEngineeringRoles = (items) => {
  return items.filter((item) => !item.isEngineeringRole)
}
