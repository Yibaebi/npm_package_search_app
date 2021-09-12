import React from 'react'
import { Tag } from '../..'
import './searchItem.css'

interface SearchItemProps {
  title?: string
  repoLink?: string
  homepage?: string
  description?: string
  npmLink: string
  keywords: string[]
}

const SearchItem: React.FC<SearchItemProps> = ({
  repoLink = '',
  homepage = '',
  description = '',
  title = 'Item One',
  npmLink,
  keywords = [],
}) => {
  description = description.length > 120 ? `${description.substring(0, 120)}...` : description
  return (
    <li className="nps-search--item">
      <h4>{title}</h4>
      <p className="item--desc">{description}</p>
      <div className="item--ctas">
        <a target="_blank" rel="noreferrer" href={npmLink} className="see-more" title="NPM home">
          See More
        </a>
        <a target="_blank" rel="noreferrer" href={repoLink} title="github profile">
          <i className="fab fa-github"></i>
        </a>
        <a target="_blank" rel="noreferrer" href={homepage} title="home link">
          <i className="fas fa-home"></i>
        </a>
      </div>

      <section className="nps-tags--container">
        {keywords.length >= 1 ? keywords.map(keyword => <Tag label={keyword} key={keyword} />) : <></>}
      </section>
    </li>
  )
}

export { SearchItem }
