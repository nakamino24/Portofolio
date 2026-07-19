export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^\+?\(?[0-9]{1,3}\)?[\s\-.]?\(?[0-9]{1,3}\)?[\s\-.]?[0-9]{4,6}$/
  return re.test(phone)
}

export const validateUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const validateRequired = (value) => {
  return value !== undefined && value !== null && value !== ''
}

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength
}

export const validateContactForm = (formData) => {
  const errors = {}

  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required'
  } else if (!validateMinLength(formData.name, 2)) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'Message is required'
  } else if (!validateMinLength(formData.message, 10)) {
    errors.message = 'Message must be at least 10 characters'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
