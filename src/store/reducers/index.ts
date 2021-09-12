import { combineReducers } from 'redux'
import { repositoriesReducer } from './repositoriesReducer'

const reducers = combineReducers({
  repostories: repositoriesReducer,
})

export default reducers
export type RootState = ReturnType<typeof reducers>
