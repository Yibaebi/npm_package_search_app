import React from 'react'
import './Input.css'

interface InputProps {
  onChange: () => void
  placeHolder: string
  value: string
}

const Input: React.FC<InputProps> = ({ onChange, placeHolder = 'Search a Package...', value }) => {
  return <input className="nps-input" placeholder={placeHolder} onChange={onChange} value={value} />
}

export default Input
