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
