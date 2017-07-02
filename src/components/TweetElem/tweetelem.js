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
        <div className="userbox">
          <div className="userimgcontainers">
            <img className="userimg" src={userimg}/>
          </div>
          <p className="username">{username}</p><br />
          <p className="hashtag">@{username}</p>
          <p className="date" >{date}</p>
        </div>
        <p>{text}</p>
        <p>{date}</p>
      </div>
    );
  };
}

export default TweetElem;
