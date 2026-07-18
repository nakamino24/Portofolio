import React from 'react'
import PropTypes from 'prop-types'

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Card = ({ className = '', children, ...props }) => {
  const classes = cn(
    'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700',
    className
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Card.defaultProps = {
  className: '',
}

export default Card
