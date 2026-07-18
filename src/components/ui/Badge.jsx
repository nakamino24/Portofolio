/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Badge = ({ variant = 'default', className = '', children, ...props }) => {
  const variants = {
    default:
      'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
    secondary:
      'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive:
      'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline:
      'border input bg-background hover:bg-accent hover:text-accent-foreground',
  }

  const classes = cn(
    'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    variants[variant],
    className
  )

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  variant: PropTypes.oneOf(['default', 'secondary', 'destructive', 'outline']),
  className: PropTypes.string,
  children: PropTypes.node,
}

Badge.defaultProps = {
  variant: 'default',
  className: '',
}

export default Badge
