import React, { Component } from 'react';

import Header from '../../components/Header';
import Accueil from '../Accueil';
import TweetBox from '../../components/TweetBox';
import ProfilBox from '../../components/ProfilBox';
import { list } from '../../Constants';
import './Home.css';

class Home extends Component {

  state = {
  };


  render() {
    return (
      <div className="homepage">
        <Header />
        <div className="HomeHeader">
          <ProfilBox />
          <TweetBox />
        </div>
        <Accueil />
      </div>
    );
  }
}

export default Home;
