import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Session from './components/Session';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Session}/>
      </Switch>
    </Router>
  )
};