import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './pages/Main';
import Layout from './pages/Layout';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      {/* <Route path="" name="" component={}></Route> */}
    </Route>
  </Router>, app
);
