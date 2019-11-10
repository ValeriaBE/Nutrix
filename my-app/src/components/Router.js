import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home'

const Routes = () => {
  return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
  )
}

export default Routes;