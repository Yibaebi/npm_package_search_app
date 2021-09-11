import React, { useState } from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import './search.css'

const Search: React.FC = () => {
  const [searchTerm, setstate] = useState<string>('')
  const handleSearchChange = (): void => {}

  return (
    <div className="nps-search">
      <div className="nps-search--form">
        <Input onChange={handleSearchChange} placeHolder="Search a package..." value={searchTerm} />
        <Button label="Search" />
      </div>
    </div>
  )
}

export { Search }
