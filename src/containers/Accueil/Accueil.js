import React from 'react';

import './Accueil.css';
import TweetElem from '../../components/TweetElem';
import { tweets } from '../../Constants';

const Acceuil = props => (
  <div className="Accueil">
    {tweets.map((tweet, index) => (
      <TweetElem
        key={index}
        {...tweet}
      />
    ))}
  </div>
);

export default Acceuil;
