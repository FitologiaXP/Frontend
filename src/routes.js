import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Session from './components/Session';
import Categories from './components/Categories';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/login" render={(routeProps) => <Session name="Login" {...routeProps}/>} /> 
        <Route path="/cadastrar" render={(routeProps) => <Session name="Cadastrar" {...routeProps}/>} /> 
        <Route render={(routeProps) => <Session name="Login" {...routeProps}/>} /> 
      </Switch>
    </Router>
  )
};