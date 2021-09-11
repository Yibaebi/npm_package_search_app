import React from 'react'
import { Route, RouteComponentProps } from 'react-router'

interface RouteBuilderProps {
  path: string
  exact: boolean
  component: React.FC
}

export const AppRouter: React.FC<RouteBuilderProps> = ({ path, exact, component, ...rest }) => {
  const Component = component
  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      render={(
        props: RouteComponentProps<{
          [x: string]: string | undefined
        }>,
      ) => {
        return <Component {...rest} {...props} />
      }}
    />
  )
}
