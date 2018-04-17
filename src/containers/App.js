import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../tools/devTools';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends Component {
  render() { 
    return 
      <main>
        <h1>Hello World</h1>
      </main>
  }
}
    
function mapStateToProps (state) {
  return {
    note: state,
    page: state
  }
}

export default connect(mapStateToProps)(App);