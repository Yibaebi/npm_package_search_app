import { Home } from '../../pages'
import { AppRouter } from '../routers/appRouter'

export const routeBuilder = [
  {
    path: '/',
    component: Home,
    router: AppRouter,
    exact: true,
  },
]
