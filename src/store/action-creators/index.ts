import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from '../action-types'
import { SearchAction } from '../actions'

export const searchRespositories = (term: string) => async (dispatch: Dispatch<SearchAction>) => {
  // Dispatch for active search action
  dispatch({
    type: ActionTypes.SEARCH_REPOSITORIES,
  })

  try {
    const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${term}`)

    const repositories = data.objects.map((result: any) => {
      const packageItem = result.package
      const npmLink = packageItem.links.npm

      return {
        title: packageItem.name,
        description: packageItem.description,
        repoLink: !packageItem.links.repository ? npmLink : packageItem.links.repository,
        homepage: !packageItem.links.homepage ? npmLink : packageItem.links.homepage,
        npmLink,
        keywords: packageItem.keywords,
      }
    })

    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
      payload: repositories,
    })
  } catch (error: any) {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
      payload: error?.response?.message,
    })
  }
}
