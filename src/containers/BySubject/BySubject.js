import React, { Component, PropTypes } from 'react';

import Header from '../../components/Header';
import Accueil from '../Accueil';
import { list } from '../../Constants';
import './Bysubject.css';

class Bysubject extends Component {

  static PropTypes = {
    params: PropTypes.object.isRequired,
  }
  state = {
  };

  render() {
    const { params } = this.props;

    return (
      <div className="homepage">
        <Header />
        <h1>{params.subject}</h1>
      </div>
    );
  }
}

export default Bysubject;
