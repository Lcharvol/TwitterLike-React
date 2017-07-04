import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import './Header.css';

import Menu from '../Menu';

class Header extends Component {
  state = {

  }

  render() {
    return (
      <div className="header">
        <i className="fa fa-globe fa-6 logo" aria-hidden="true" />
        <Link to="Register">
          <div className="Button">
            <p>Register</p>
          </div>
        </Link>
        <Link to="Login">
          <div className="Button">
            <p>Login</p>
          </div>
        </Link>
        <Menu />
      </div>
    );
  }
}

export default Header;
