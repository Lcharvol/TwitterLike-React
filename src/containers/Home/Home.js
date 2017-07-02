import React, { Component } from 'react';

import Header from '../../components/Header';
import Accueil from '../Accueil';
import { list } from '../../Constants';
import './Home.css';

class Home extends Component {

  state = {
  };

  render() {
    return (
      <div className="homepage">
        <Header />
        <Accueil
          categories="politique"
        />
      </div>
    );
  }
}

export default Home;
