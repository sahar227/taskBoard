import React, { Component } from "react";
import UserForm from './UserForm';
import {connect} from 'react-redux';
import {logIn} from '../actions/userActions';

export class Login extends Component {
  onSubmit = (formValues) => {
    this.props.logIn(formValues);
  }

  fields = [
    {
      name: 'email',
      label: 'enter your email',
      type: 'email'
    },
    {
      name: 'password',
      label: 'enter your password',
      type: 'password'
    }
  ];

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <UserForm fields={this.fields} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, {logIn})(Login);
