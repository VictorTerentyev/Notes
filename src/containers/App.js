import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import NotesApp from './NotesApp';

import * as reducers from '../reducers';

import styles from './App.css';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Provider store={store}>
          <NotesApp/>
        </Provider>
      </div>
    );
  }
}