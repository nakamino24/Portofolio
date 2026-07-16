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
