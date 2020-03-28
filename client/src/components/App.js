import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";
import history from "../history";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router history={history}>
          <Switch>
            <Route path="/boards" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}
