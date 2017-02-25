import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Pages
import Layout from 'pages/Layout';
import Main from 'pages/Main';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Main}></IndexRoute>
        {/* <Route path="" name="" component={}></Route> */}
      </Route>
    </Router>
  );
}
