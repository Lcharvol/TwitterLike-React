import React, { Component } from 'react';

import Header from '../../components/Header';
import Accueil from '../Accueil';
import TweetBox from '../../components/TweetBox';
import { list } from '../../Constants';
import './Home.css';

class Home extends Component {

  state = {
  };


  render() {
    return (
      <div className="homepage">
        <Header />
        <TweetBox />
        <Accueil
          categories="politique"
        />
      </div>
    );
  }
}

export default Home;
