import { forwardRef } from 'react'

const Badge = forwardRef(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      className = '',
      dot = false,
      dotColor,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
      primary:
        'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      success:
        'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      warning:
        'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      danger: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      info: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
      outline:
        'border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-300',
      subtle: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
    }

    const sizeStyles = {
      xs: 'px-2 py-0.5 text-xs',
      sm: 'px-2.5 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    }

    const dotStyles = {
      default: 'bg-gray-400',
      primary: 'bg-blue-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500',
      info: 'bg-purple-500',
    }

    return (
      <span
        ref={ref}
        className={`inline-flex items-center gap-1.5 rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {dot && (
          <span
            className={`w-1.5 h-1.5 rounded-full ${dotColor ? `bg-${dotColor}-500` : dotStyles[variant]}`}
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
