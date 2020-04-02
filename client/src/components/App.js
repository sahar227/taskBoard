import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";
import EditTask from "../screens/EditTask";
import history from "../history";
import Header from "./Header";
import ShowBoard from "../screens/ShowBoard";
import "../styles/styles.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router history={history}>
          <Route path="/boards" exact component={Dashboard} />
          <Route path="/boards/:id" component={ShowBoard} />
          <Route path="/boards/:id/:taskId" exact component={EditTask} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Router>
      </div>
    );
  }
}
