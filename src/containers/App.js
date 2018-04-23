import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import NotesApp from './NotesApp';

import { createStore, renderDevTools } from '../tools/devTools';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Provider store={store}>
          <NotesApp />
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}