import { combineReducers } from 'redux'
import { repositoriesReducer } from './repositoriesReducer'

export const reducers = combineReducers({
  repostoriesReducer: repositoriesReducer,
})
