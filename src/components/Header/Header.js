import React, { Component } from 'react';

import './Header.css';
import MenuElem from '../MenuElem';

class Header extends Component {
  state = {
    searchFocus: false,
  }

  handleSearchFocus = () => {
    const { searchFocus } = this.state;

    if (searchFocus === false) {
      this.setState( { searchFocus: true} );
    } else {
      this.setState( { searchFocus: false} );
    }
  }

  render () {
    const { searchFocus } = this.state;

    return (
      <div className="header">
        <i className="fa fa-globe fa-6 logo" aria-hidden="true"></i>
        <div className="menu">
          <div
          className="searchBox"
          onMouseLeave={this.handleSearchFocus}
          onMouseEnter={this.handleSearchFocus}
          >
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
