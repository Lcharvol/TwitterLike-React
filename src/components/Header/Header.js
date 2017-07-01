import React, { Component } from 'react';

import './Header.css';
import MenuElem from '../MenuElem';

class Header extends Component {
  state = {

  }
  render () {
    return (
      <div className="header">
        <div className="menu">
          <div className="searchbox">
            <i className="fa fa-search fa-2x loupe" aria-hidden="true"></i>
          </div>
          <MenuElem
              name="En vedette"
          />
          <MenuElem
            name="Divertissement"
          />
          <MenuElem
            name="Politique"
          />
          <MenuElem
            name="Musique"
          />
        </div>
      </div>
    );
  }
};

export default Header;
