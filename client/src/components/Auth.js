import React, { Component } from 'react';
import '../styles/Auth.css';
import {connect} from 'react-redux';
import {logOut} from '../actions/userActions';
import history from '../history';

class Auth extends Component {
    getRenderParams = (isLoggedIn) => {
        if(!isLoggedIn)
            return {
                text: 'Log in',
                onClick: () => history.push('/login'),
                styles: 'pump'
            };
        return {
            text: 'Log out',
            onClick: () => this.props.logOut(),
            styles: ''
        };
    }

    componentDidMount() {

    }

    render() {        
        const renderParams = this.getRenderParams(this.props.isLoggedIn);        
        return (
            <button className={`auth ${renderParams.styles}`} onClick={renderParams.onClick}>
                {renderParams.text}
            </button>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, {logOut})(Auth);