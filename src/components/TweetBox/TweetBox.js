import React, { Component } from 'react';

import './TweetBox.css';


class TweetBox extends Component {

  state = {
    value: '',
  }

  handleChangeTweet = ({ target: { value } }) => {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="TweetBox">
        <textarea
          spellCheck="false"
          className="TweetBoxText"
          placeholder="Type your Tweet here..."
          value={value}
          onChange={this.handleChangeTweet}
        />
        <p className="counter">{140 - value.length} carateres restants</p>
        <input
          type="submit"
          value="Tweet"
          className="TweetButton"
        />
      </div>
    );
  }
}

export default TweetBox;