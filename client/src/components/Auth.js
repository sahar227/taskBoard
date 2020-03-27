import React, { Component } from 'react';
import '../styles/Auth.css';
import {connect} from 'react-redux';
import {logIn, logOut} from '../actions/userActions';
import history from '../history';

class Auth extends Component {
    getRenderParams = (isLoggedIn) => {
        if(!isLoggedIn)
            return {
                text: 'Log in',
                onClick: () => history.push('/login')
            };
        return {
            text: 'Log out',
            onClick: () => this.props.logOut()
        };
    }

    componentDidMount() {

    }

    render() {        
        const renderParams = this.getRenderParams(this.props.isLoggedIn);        
        return (
            <button className="auth pump" onClick={renderParams.onClick}>
                {renderParams.text}
            </button>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, {logIn, logOut})(Auth);