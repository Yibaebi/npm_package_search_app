import { Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { routeBuilder } from './utils/routeBuilder'

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        {routeBuilder.map(route => {
          const { component, exact, path, router: ChosenRouter } = route
          return <ChosenRouter path={path} exact={exact} component={component} />
        })}
      </Switch>
    </Router>
  )
}

export default MainRouter
