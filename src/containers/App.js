import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../tools/devTools';
import reducer from '../reducers/index';

import NotesApp from '../containers/NotesApp';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <NotesApp />
    );
  }
}