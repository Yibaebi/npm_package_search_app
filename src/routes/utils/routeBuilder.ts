import { Home, SearchResults } from '../../pages'
import { AppRouter } from '../routers/appRouter'

export const routeBuilder = [
  {
    path: '/',
    component: Home,
    router: AppRouter,
    exact: true,
  },
  {
    path: '/search-results/:packageName',
    component: SearchResults,
    router: AppRouter,
    exact: true,
  },
]
