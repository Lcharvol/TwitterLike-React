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
        <p className="tweettext">{text}</p>
        <div className="tweetfooter">
          <i className="fa fa-comment-o tweetfooterpicto" aria-hidden="true"></i>
          <i className="fa fa-retweet tweetfooterpicto" aria-hidden="true"></i>
          <i className="fa fa-heart-o tweetfooterpicto" aria-hidden="true"></i>
        </div>
      </div>
    );
  };
}

export default TweetElem;
