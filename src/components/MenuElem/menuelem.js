import React, { Component, PropTypes } from 'react';

import './menuelem.css'
import { IndexLink, Link } from "react-router";

class MenuElem extends Component {

  static PropTypes = {
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    name: 'Undefined',
  }

  state = {
    focus: false,
  }

  handleChangeFocus = () => {
    const { focus } = this.state;

    if (focus === false) {
      this.setState( { focus: true} );
    } else {
      this.setState( { focus: false} );
    }
  }

  render () {
    const { name, icon } = this.props;
    const { focus } = this.state;

    return (
      <Link to={name}>
      <div className="menuElem"
        onMouseLeave={this.handleChangeFocus}
        onMouseEnter={this.handleChangeFocus}
      >
      <h1>{name}</h1>
        { focus && <div className="menuElemFooter"/> }
      </div>
      </Link>
    );
  };
}

export default MenuElem;
