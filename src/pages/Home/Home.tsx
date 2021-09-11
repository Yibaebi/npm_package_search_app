import React from 'react'
import RepositoriesList from '../../components/RepositoriesList'

const Home: React.FC = () => {
  return (
    <main>
      <h1>Click here to search for a package</h1>
      <RepositoriesList />
    </main>
  )
}

export { Home }
