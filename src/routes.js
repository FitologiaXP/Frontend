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
        <Route path="/" exact>
          <Categories />
        </Route>
        <Route path="/login"> 
          <Session name="Login" />
        </Route>
        <Route path="/cadastrar"> 
          <Session name="Cadastrar" />
        </Route>
        <Route> 
          <Session name="Login" />
        </Route>
      </Switch>
    </Router>
  )
};