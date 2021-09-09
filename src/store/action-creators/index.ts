import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from '../action-types'
import { Action } from '../actions'

export const searchRespositories = (term: string) => async (dispatch: Dispatch<Action>) => {
  // Dispatch for active search action
  dispatch({
    type: ActionTypes.SEARCH_REPOSITORIES,
  })

  try {
    const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${term}`)
    const repositoriesNames = data.objects.map((result: any) => result.package.name)

    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
      payload: repositoriesNames,
    })
  } catch (error: any) {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
      payload: error.response.message,
    })
  }
}
