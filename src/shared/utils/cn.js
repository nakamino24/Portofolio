/**
 * Utility function to conditionally join class names together
 * @param {...string} classes - Class names to join
 * @returns {string} Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}