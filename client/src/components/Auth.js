import React, { Component } from 'react';
import '../styles/Auth.css';

class Auth extends Component {

    // TODO: implement onClick events
    getRenderParams = (isLoggedIn) => {
        if(isLoggedIn)
            return {
                text: 'Log in',
                onClick: () => console.log('Clicked to log in')
            };
        return {
            text: 'Log out',
            onClick: () => console.log('Clicked to log out')
        };
    }

    componentDidMount() {

    }

    render() {
        const renderParams = this.getRenderParams(true); // TODO: pass state for whether we are logged in
        return (
            <button className="auth pump" onClick={renderParams.onClick}>
                {renderParams.text}
            </button>
        )
    }
}

export default Auth;