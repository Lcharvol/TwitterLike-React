import React, { Component, PropTypes } from 'react';

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
        {tweets.map((tweet, index) => tweet.categories === params.subject && (
          <TweetElem
            key={index}
            {...tweet}
          />
        ))}
      </div>
    );
  }
}

export default Bysubject;
