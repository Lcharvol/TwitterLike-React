import React, { Component, PropTypes } from 'react';

import './tweetelem.css';

class TweetElem extends Component {

  render () {
    const { img, text, username, userimg, date } = this.props;

    return (
      <div className="tweetElem">
        <div className="tweetimgcontainers">
          <img className="tweetimg" src={img}/>
        </div>
        <div>
          <div className="userimgcontainers">
            <img className="userimg" src={userimg}/>
          </div>
          <p>{text}</p>
        </div>
      </div>
    );
  };
}

export default TweetElem;
