// TODO: Доделать redux store и react router

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from 'store';
import Test from 'components/Test';

const history = syncHistoryWithStore(browserHistory, store);

const basicComponent = () => (
  <Test text="Hello world" />
);

const Routing = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={basicComponent} />
    </Router>
  </Provider>
);

export default Routing;
