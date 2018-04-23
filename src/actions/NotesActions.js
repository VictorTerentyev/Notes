import * as types from '../constants/ActionTypes';

export function addNote (name, content) {
  return {
    type: types.ADD_NOTE,
    name,
    content,
    date: new Date().toLocaleString().slice(0,10)
  };
}

export function editNote(name, content) {
  return {
    type: types.EDIT_NOTE,
    name,
    content,
    date: new Date().toLocaleString().slice(0,10)
  };
}

export function removeNote(id) {
  return {
    type: types.REMOVE_NOTE,
    id
  };
}