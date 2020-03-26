import React, { Component } from 'react'
import {Router, Route, Switch} from 'react-router-dom';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
import history from '../history';

export default class App extends Component {
    render() {
        return (
            <div>
                App
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={Signup} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
