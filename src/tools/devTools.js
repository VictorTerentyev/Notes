import React from 'react';
import reduxDevTools from 'redux-devtools';
import { createStore as initialCreateStore, compose } from 'redux';

export let createStore = initialCreateStore;

if (__DEV__) {
  createStore = compose(
    reduxDevTools.devTools(),
    reduxDevTools.persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    ),
    createStore
  );
}

export function renderDevTools(store) {
  if (__DEV__) {
    let {DevTools, DebugPanel, LogMonitor} = reduxDevTools;
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
  return null;
}