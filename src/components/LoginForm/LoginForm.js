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
        <div className="LoginFormFooter" />
      </div>
    );
  }
}

export default LoginForm;
