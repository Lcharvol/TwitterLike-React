import React, { Component } from 'react';

import './Menu.css';
import MenuElem from '../MenuElem';

class Menu extends Component {

  state = {
    searchFocus: false,
    searchState: true,
  }

  handleSearchFocus = () => {
    const { searchFocus } = this.state;

    if (searchFocus === false) {
      this.setState({ searchFocus: true });
    } else {
      this.setState({ searchFocus: false });
    }
  }

  handleChangeSearch = () => {
    const { searchState } = this.state;

    if (searchState === false) {
      this.setState({ searchState: true });
    } else {
      this.setState({ searchState: false });
    }
  }

  render() {
    const { searchFocus, searchState } = this.state;

    return (
      <div className="menu">
        <div className="menuContainers">
          {searchState && <div
            className="searchBox"
            onClick={this.handleChangeSearch}
            onMouseLeave={this.handleSearchFocus}
            onMouseEnter={this.handleSearchFocus}
          >
            <i className="fa fa-search fa-2x icon" aria-hidden="true" />
            {searchFocus && <div className="searchBoxFooter" />}
          </div>
          }
          {!searchState &&
            <div className="searchBar">
              <i className="fa fa-times closeSearch" aria-hidden="true" onClick={this.handleChangeSearch} />
            </div>
          }
          {searchState &&
            <div className="menumain">
              <MenuElem
                name="Acceuil"
                link="/"
              />
              <MenuElem
                name="Divertissement"
                link="Divertissement"
              />
              <MenuElem
                name="Politique"
                link="Politique"
              />
              <MenuElem
                name="Musique"
                link="Musique"
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Menu;
