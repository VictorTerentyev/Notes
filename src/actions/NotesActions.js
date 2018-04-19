import { EDIT_NOTE, REMOVE_NOTE } as types from '../constants/ActionTypes';

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
    types.REMOVE_NOTE,
    id
  };
}