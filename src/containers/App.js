import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../tools/devTools';
import reducer from '../reducers/index';

import NotesApp from './NotesApp';

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
console.log(store.getState())

export default class App extends Component {

  render() {
    return (
      <div class="main">
        <Provider store={store}>
          {() => <NotesApp /> }
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
  
}