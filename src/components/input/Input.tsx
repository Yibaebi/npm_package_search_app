import React from 'react'
import './Input.css'

export interface InputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeHolder: string
  value: string
  type: React.HTMLInputTypeAttribute
}

const Input: React.FC<InputProps> = ({ handleInputChange, placeHolder = 'Search a Package...', value, type }) => {
  return (
    <input
      className="nps-input"
      type={type}
      placeholder={placeHolder}
      onChange={e => handleInputChange(e)}
      value={value}
    />
  )
}

export default Input
