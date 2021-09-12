import React from 'react'
import { Spinner } from '..'
import './Button.css'

interface ButtonProps {
  label: string
  icon?: () => JSX.Element
  className?: string
  loading: boolean
  disabled: boolean
}

const Button: React.FC<ButtonProps> = ({ icon, label = 'Label', className = '', loading, disabled }) => {
  return (
    <button className={`nps-btn ${className}  ${loading ? 'loading' : ''}`} disabled={disabled}>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {icon && icon()}
          {label}
        </React.Fragment>
      )}
    </button>
  )
}

export default Button
