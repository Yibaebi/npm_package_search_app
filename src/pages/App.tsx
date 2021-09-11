import React from 'react'
import { Provider } from 'react-redux'
import MainRouter from '../routes/index'
import { store } from '../store/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  )
}

export default App
