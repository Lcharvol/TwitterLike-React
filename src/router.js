import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Bysubject from './containers/Bysubject';
import Page404 from './containers/Page404';
import Login from './containers/Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="404" component={Page404} />
    <Route path="/Login" component={Login} />
    <Route path="/:subject" component={Bysubject} />
    <Redirect from="*" to="404" />
  </Route>
);
