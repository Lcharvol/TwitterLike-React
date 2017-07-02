import React, { PropTypes } from 'react';

import Home from '../../containers/Home';

import './App.css';

const App = ({ children }) =>
(
  <main>
    {children}
  </main>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
