import React from 'react'
import { Search } from '../../components'
import './Home.css'

const Home: React.FC = () => {
  return (
    <main className="nps-home--main">
      <section className="nps-search--container">
        <div className="logo--container">
          <i className="fab fa-npm"></i>
        </div>
        <h2 className="">
          The worlds's largest database of third party packages for your web application. Contains over 1.3 million
          packages to choose from.
        </h2>
        <Search page="home" />
      </section>
    </main>
  )
}

export { Home }
