/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Button = ({
  children,
  variant = 'default',
  size = 'default',
  asChild = false,
  className = '',
  ...props
}) => {
  // Variants
  const variantVariants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive:
      'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'underline-offset-4 hover:underline text-primary',
  }

  // Sizes
  const sizeVariants = {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-9 px-3 rounded-md text-xs',
    lg: 'h-11 px-8 rounded-md text-sm',
    icon: 'h-10 w-10',
  }

  // Base styles
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-md border font-medium transition-colors hover-no-focus ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  // Combine classes
  const classes = cn(
    baseClasses,
    variantVariants[variant] || variantVariants.default,
    sizeVariants[size] || sizeVariants.default,
    className
  )

  // Component
  const Component = asChild ? 'span' : 'button'

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'default',
    'destructive',
    'outline',
    'secondary',
    'ghost',
    'link',
  ]),
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']),
  asChild: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  variant: 'default',
  size: 'default',
  asChild: false,
}

export default Button
