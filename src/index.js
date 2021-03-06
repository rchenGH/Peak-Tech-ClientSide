import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app.js';
import reducers from './reducers/index';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
