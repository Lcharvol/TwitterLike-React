import React, { Component } from 'react';

import Header from '../../components/Header';
import Accueil from '../Accueil';
import { list } from '../../Constants';
import './BySubject.css';

class BySubject extends Component {

  state = {
  };

  render() {
    return (
      <div className="homepage">
        <Header />
      </div>
    );
  }
}

export default BySubject;
