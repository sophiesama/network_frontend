import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './utils/history';
import Home from './pages/Home';

const RouterConfig = () => (
  <Router history={history}>
    <Route path="/" component={Home} />
  </Router>
);
export default RouterConfig;
