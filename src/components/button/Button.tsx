import React from 'react'
import { searchIcon } from '../../assets'
import './Button.css'

interface ButtonProps {
  label: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ label = 'Label', className = '' }) => {
  return (
    <button className={`nps-btn ${className}`}>
      {searchIcon()}
      {label}
    </button>
  )
}

export default Button
