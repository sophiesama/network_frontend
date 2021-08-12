import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './utils/history';
import Home from './pages/Home';
import DeviceList from './pages/DeviceList';

const RouterConfig = () => (
  <Router history={history}>
    <Route exact path="/" component={Home} />
    <Route path="/devices" component={DeviceList} />
  </Router>
);
export default RouterConfig;
