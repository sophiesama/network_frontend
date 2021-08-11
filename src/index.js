import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { modalsStore } from './redux/reducers/modalsReducer';

var rootReducer = combineReducers({ modalsStore })
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
