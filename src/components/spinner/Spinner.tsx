import React from 'react'
import './Spinner.css'

const Spinner = ({ height = '100%' }) => {
  return (
    <div className="nps-lds-ring">
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export { Spinner }
