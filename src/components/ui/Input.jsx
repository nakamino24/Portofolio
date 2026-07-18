/* eslint-disable-next-line no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  const classes = cn(
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    className
  )

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={classes}
      {...props}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => {},
  disabled: false,
  className: '',
}

export default Input
