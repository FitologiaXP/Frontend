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
        <Route path="/" exact component={Categories}/>
        <Route path="/auth" component={Session}/>
        <Route component={Session} />
      </Switch>
    </Router>
  )
};