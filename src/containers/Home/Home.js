import React, { Component } from 'react';

import Header from '../../components/Header';
import { list } from '../../Constants';
import './Home.css';

class Home extends Component {

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

export default Home;
