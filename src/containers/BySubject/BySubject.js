import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Header from '../../components/Header';
import TweetElem from '../../components/TweetElem';
import { tweets } from '../../Constants';
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
        <div className="TweetContainers">
          {tweets.map((tweet, index) => tweet.categories === params.subject && (
          <TweetElem
            key={index}
            {...tweet}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default Bysubject;
