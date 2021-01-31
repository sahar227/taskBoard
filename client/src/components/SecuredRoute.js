import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from '../screens/Login';

const SecuredRoute = ({isLoggedIn, ...props}) => {
    if(isLoggedIn)
        return (
            <Route {...props}/>
        );
    return <Route {...props} component={Login}/>
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
  });

export default connect(mapStateToProps)(SecuredRoute);