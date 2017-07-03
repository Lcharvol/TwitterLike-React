import React, { Component } from 'react';

import './TweetBox.css';


class TweetBox extends Component {

  state = {
    value: '',
  }

  handleChangeTweet = ({ target: { value } }) => {
    this.setState({ value });
  }

  handleAddTweet = () => {
    const { value } = this.state;

    if (value.length && value.length > 140) {
      this.setState({ value: '' });
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div className="TweetBox">
        <textarea
          spellCheck="false"
          className={value.length > 140 ? 'TweetBoxText false' : 'TweetBoxText'}
          placeholder="Type your Tweet here..."
          value={value}
          onChange={this.handleChangeTweet}
        />
        <p className="counter">{140 - value.length} carateres restants</p>
        <button
          type="button"
          disabled={!value.length || value.length > 140}
          value="Tweet"
          className="TweetButton"
          onClick={this.handleAddTweet}
        >Tweet</button>
      </div>
    );
  }
}

export default TweetBox;
