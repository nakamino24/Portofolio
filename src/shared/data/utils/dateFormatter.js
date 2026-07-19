export const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const formatPeriod = (startDate, endDate, current = false) => {
  const start = formatDate(startDate)
  const end = current ? 'Present' : formatDate(endDate)
  return `${start} – ${end}`
}

export const formatYear = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString
  return date.getFullYear().toString()
}
