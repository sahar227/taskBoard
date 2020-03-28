import React, { Component } from "react";
import UserForm from './UserForm';
import {connect} from 'react-redux';
import {logIn} from '../actions/userActions';
import history from '../history';

export class Login extends Component {
  onSubmit = (formValues) => {
    this.props.logIn(formValues);
  }

  fields = [
    {
      name: 'email',
      label: 'Enter your email:',
      type: 'email'
    },
    {
      name: 'password',
      label: 'Enter your password:',
      type: 'password'
    }
  ];
  
  renderSignUpButton = () => {
    return <button onClick={() => history.push('/signup')} className="button sign-up">Sign up</button>;
  }

  formParams = {
    title: 'Log in:',
    fields: this.fields,
    onSubmit: this.onSubmit,
    callToAction: 'Log in',
    additionalAction: this.renderSignUpButton
  }



  render() {
    return (
      <div>
        <UserForm {...this.formParams} />
      </div>
    );
  }
}

export default connect(null, {logIn})(Login);
