import React from 'react';
import { IndexLink, Link } from 'react-router';

import './SmallHeader.css';

const SmallHeader = () => (
  <div className="SmallHeader">
    <Link to="/">
      <i className="fa fa-globe fa-2x smallglobe" aria-hidden="true" />
    </Link>
  </div>
);

export default SmallHeader;
