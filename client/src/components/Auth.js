import React, { Component } from 'react';
import '../styles/Auth.css';
import history from '../history';

class Auth extends Component {
    getRenderParams = (isLoggedIn) => {
        if(isLoggedIn)
            return {
                text: 'Log in',
                onClick: () => history.push('/login')
            };
        return {
            text: 'Log out',
            onClick: () => console.log('Clicked to log out') // TODO: needs to remove auth token from local storage
        };
    }

    componentDidMount() {

    }

    render() {
        const renderParams = this.getRenderParams(false); // TODO: pass state for whether we are logged in
        return (
            <button className="auth pump" onClick={renderParams.onClick}>
                {renderParams.text}
            </button>
        )
    }
}

export default Auth;