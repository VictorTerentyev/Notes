import { ADD_NOTE } as types from '../constants/ActionTypes';

export function addNote (name, content) {
  return {
    type: types.ADD_NOTE,
    name,
    content,
    date: new Date().toLocaleString().slice(0,10)
  };
}