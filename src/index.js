import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { modalsStore } from './redux/reducers/modalsReducer';
// import { modalsStore } from './redux/store/modals.store';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.unregister();
