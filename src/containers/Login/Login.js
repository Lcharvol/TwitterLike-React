import React, { Component } from 'react';

import './Login.css';

import SmallHeader from '../../components/SmallHeader';
import LoginForm from '../../components/LoginForm';

class Login extends Component {

  render() {
    return (
      <main>
        <SmallHeader />
        <LoginForm />
      </main>
    );
  }
}

export default Login;
