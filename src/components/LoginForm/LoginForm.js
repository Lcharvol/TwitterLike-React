import React, { Component } from 'react';

import './LoginForm.css';

class LoginForm extends Component {

  state = {

  }

  render() {
    return (
      <div className="LoginForm">
        <div className="mainLoginForm">
          <h1>Log in to Twitter</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea className="inputLogin" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              <textarea className="inputLogin" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="LoginFormSubmit" type="submit" value="Submit" />
          </form>
        </div>
        <div className="LoginFormFooter">
          <p>New to Twitter?</p><a> Sign up now »</a>

          <p>Already using Twitter via text message? Activate your account »</p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
