import React from 'react'
import { Spinner } from '..'
import emptySearchIll from '../../assets/icons/empty search results.svg'
import { useTypedSelector } from '../../hooks/useTypedSelector/index'
import { SearchItem } from './components/searchItem'
import './searchResultsList.css'

const SearchResultsList: React.FC = () => {
  const { data: RepositoriesList, loading } = useTypedSelector(state => state.repostories)

  return (
    <ul className="nps-search-results--list-wrapper">
      {loading ? (
        <div className="searching-repositories">
          <Spinner /> <h3>Finding your package...</h3>
        </div>
      ) : RepositoriesList.length < 1 ? (
        <div className="no-repositories--found">
          <img src={emptySearchIll} alt="no results" />
          <h3>No results matched your query...</h3>
        </div>
      ) : (
        <React.Fragment>
          {RepositoriesList.map(packageItem => (
            <SearchItem {...packageItem} />
          ))}
        </React.Fragment>
      )}
    </ul>
  )
}

export { SearchResultsList }
