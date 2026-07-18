/**
 * Validate email format
 * @param {string} email - Email address
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
