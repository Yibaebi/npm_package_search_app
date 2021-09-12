import { ActionTypes } from '../action-types'
import { RepositoryData } from '../reducers/repositoriesReducer'

export interface SearchRepositoriesAction {
  type: ActionTypes.SEARCH_REPOSITORIES
}
export interface SearchRepositoriesSuccessAction {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS
  payload: RepositoryData[]
}
export interface SearchRepositoriesErrorAction {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR
  payload: string
}

export type SearchAction = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction
