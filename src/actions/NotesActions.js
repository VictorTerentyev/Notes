import * as types from '../constants/ActionTypes';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function add(name, content, date) {
  return {
    type: types.ADD_NOTE,
    name,
    content,
    date
  };
}

function edit(id, name, content, date) {
  return {
    type: types.EDIT_NOTE,
    id,
    name,
    content,
    date
  };
}

function remove(id) {
  return {
    type: types.REMOVE_NOTE,
    id
  };
}

export function addNote(name, content, date) {
  return function(dispatch, getState) {
    dispatch(add(name, content, date));
    localStorage.setItem('notesAppState', JSON.stringify(getState()));
  }
}

export function editNote(id, name, content, date) {
  return function(dispatch, getState) {
    dispatch(edit(id, name, content, date));
    localStorage.setItem('notesAppState', JSON.stringify(getState()));
  }
}

export function removeNote(id) {
  return function(dispatch, getState) {
    dispatch(remove(id));
    localStorage.setItem('notesAppState', JSON.stringify(getState()));
  }
}