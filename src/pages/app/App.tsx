import React from 'react';
import { Provider } from 'react-redux';
import { Action, applyMiddleware, compose, createStore, Dispatch, Middleware } from 'redux';
import ReactGA from 'react-ga';

import rootReducer from '../../stores/reducers';
import Routes from './Routes';
import initializeFirebase from './initializeFirebase';

declare global {
  // tslint:disable-next-line interface-name
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const asPlainObjectMiddleware = (() => (next: Dispatch<Action>) => action =>
  next({ ...action })) as Middleware;

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(asPlainObjectMiddleware)),
  );
};
export const store = configureStore();

initializeFirebase();
ReactGA.initialize('UA-142549318-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
