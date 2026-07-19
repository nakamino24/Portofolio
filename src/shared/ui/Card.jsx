import { forwardRef } from 'react'

const Card = forwardRef(
  (
    {
      children,
      className = '',
      variant = 'default',
      padding = 'md',
      hover = false,
      border = true,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: 'bg-white dark:bg-gray-900',
      elevated: 'bg-white dark:bg-gray-900 shadow-lg',
      outlined:
        'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700',
      ghost: 'bg-transparent',
      muted: 'bg-gray-50 dark:bg-gray-800/50',
    }

    const paddingStyles = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    }

    const hoverStyles = hover
      ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
      : ''

    const borderStyles = border
      ? 'border border-gray-200 dark:border-gray-700'
      : ''

    return (
      <div
        ref={ref}
        className={`${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${borderStyles} rounded-2xl ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
))
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef(
  ({ children, className = '', as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref}
      className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef(
  ({ children, className = '', ...props }, ref) => (
    <p
      ref={ref}
      className={`mt-1 text-sm text-gray-600 dark:text-gray-400 ${className}`}
      {...props}
    >
      {children}
    </p>
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef(({ children, className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
    {...props}
  >
    {children}
  </div>
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
