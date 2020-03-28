import React, { Component } from "react";
import UserForm from './UserForm';
import history from '../history';
import api from '../apis/api';
import {authToken} from '../configs';

export class Signup extends Component {
  onSubmit = async (formValues) => {
    const response = await api.post('/users/', formValues);
    const token = response?.headers['x-auth-token'];
    if(token) {
      localStorage.setItem(authToken, token);
      history.push('/boards');
    }
  }

  fields = [
    {
      name: 'name',
      label: 'Enter your name',
      type: 'text'
    },
    {
      name: 'email',
      label: 'Enter your email:',
      type: 'email'
    },
    {
      name: 'password',
      label: 'Enter a password:',
      type: 'password'
    }
  ];

  formParams = {
    title: 'Sign up:',
    fields: this.fields,
    onSubmit: this.onSubmit,
    callToAction: 'Sign up',
    additionalAction: null
  }

  render() {
    return <UserForm {...this.formParams}/>;
  }
}

export default Signup;
