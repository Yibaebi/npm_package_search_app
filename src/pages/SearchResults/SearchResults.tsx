import React from 'react'
import { Search, SearchResultsList } from '../../components'
import './SearchResults.css'

const SearchResults: React.FC = () => {
  return (
    <div className="nps-search-results--page">
      <section className="sticky-search--bar">
        <Search page="home" />
      </section>
      <SearchResultsList />
    </div>
  )
}

export { SearchResults }
