import React from 'react';
import { Router, Route } from 'react-router';
import Test from 'components/Test';

const basicComponent = (
  <Test text="Hello world" />
);

const Routing = () => (
  <Router>
    <Route exact path="/" component={basicComponent} />
  </Router>
);

export default Routing;
