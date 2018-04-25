import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import NotesApp from './NotesApp';

import { createStore, renderDevTools } from '../tools/devTools';
import * as reducers from '../reducers';

import styles from './App.css';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Provider store={store}>
          <NotesApp />
        </Provider>
      </div>
    );
  }
}