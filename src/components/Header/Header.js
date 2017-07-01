import React, { Component } from 'react';

import './Header.css';
import MenuElem from '../MenuElem';

class Header extends Component {
  state = {
    searchFocus: true,
  }

  handleSearchFocus = () => {

  }

  render () {
    const { searchFocus } = this.state;

    return (
      <div className="header">
        <div className="menu">
          <div className="searchBox">
            <i className="fa fa-search fa-2x icon" aria-hidden="true"></i>
            {searchFocus && <div className="searchBoxFooter"/>}
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
          />
        </div>
      </div>
    );
  }
};

export default Header;
