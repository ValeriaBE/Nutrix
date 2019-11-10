import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import Orders from './Products'
import Home from './Home'

const Routes = () => {
  return (
    <Switch>
    <Route exact path='/' component={Login} />
    <Route exact path='/orders' component={Orders} />
    <Route exact path='/home' component={Home} />
    <Route path='*' component={() => '404 NOT FOUND'} />
  </Switch>
  )
}

export default Routes;