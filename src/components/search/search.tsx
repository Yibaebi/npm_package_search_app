import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { searchIcon } from '../../assets/icons/index'
import { useActionCreators } from '../../hooks'
import { useTypedSelector } from '../../hooks/useTypedSelector/index'
import Button from '../button/Button'
import Input from '../input/Input'
import './search.css'

interface SearchParams {
  packageName: string
}

interface SearchProps {
  page?: string
}

const Search: React.FC<SearchProps> = ({ page = '' }) => {
  const { packageName } = useParams<SearchParams>()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { searchRespositories } = useActionCreators()
  const { loading } = useTypedSelector(state => state.repostories)

  useEffect(() => {
    setSearchTerm(packageName)
    searchRespositories(searchTerm)
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.currentTarget.value)

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    searchRespositories(searchTerm)
    console.log(page)

    if (page === 'home') {
      window.location.href = `/search-results/${searchTerm}`
    }
  }

  return (
    <div className="nps-search">
      <form className="nps-search--form" onSubmit={handleSearchSubmit}>
        <Input
          type="search"
          handleInputChange={handleSearchChange}
          placeHolder="Search a package..."
          value={searchTerm}
        />
        <Button label="Search" loading={loading} disabled={loading} icon={searchIcon} />
      </form>
    </div>
  )
}

export { Search }
