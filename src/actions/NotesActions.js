import * as types from '../constants/ActionTypes';

export function addNote (name, content, date) {
  return {
    type: types.ADD_NOTE,
    name,
    content,
    date
  };
}

export function editNote(id, name, content, date) {
  return {
    type: types.EDIT_NOTE,
    id,
    name,
    content,
    date
  };
}

export function removeNote(id) {
  return {
    type: types.REMOVE_NOTE,
    id
  };
}