import { ActionTypes } from '../action-types'
import { SearchAction } from '../actions/index'

export interface RepositoryData {
  name: string
  description: string
  repoLink: string
  homepage: string
  npmLink: string
  keywords: string[]
}
interface RepositoriesState {
  loading: boolean
  error: string | null
  data: RepositoryData[]
}

const initialRepositoriesState = {
  loading: false,
  error: null,
  data: [],
}

export const repositoriesReducer = (state: RepositoriesState = initialRepositoriesState, action: SearchAction) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }

    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }

    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }

    default:
      return state
  }
}
