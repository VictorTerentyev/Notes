import * as types from '../constants/ActionTypes';

const date = new Date().toLocaleString().slice(0,10);

const initialState = {
  id: 0,
  name: 'default',
  content: 'default',
  date: date,
  notes: [],
  notesById: {}
}

export default function notes(state = initialState, action) {

  switch (action.type) {

    case types.EDIT_NOTE:
      const id = state.notes[state.notes.length-1];
      return ({
        ...state,
        notesById: {
          ...state.notesById,
          [id]: {
            id: id,
            name: action.name,
            content: action.content,
            date: action.date
          }
        }
      })

    case types.REMOVE_NOTE:
    
      function removeFromNotesById(element, id) {
        delete element[id];
        for (let key in element) {
          if (key > id) {
            element[key].id--;
            element[key-1] = element[key];
            delete element[key];
          }
        }
        return element
      }

      return ({
        ...state,
        notes: state.notes.splice(action.id, 1),
        notesById: removeFromNotesById(state.notesById, action.id)
      })

    case types.ADD_NOTE:
      const newId = state.notes.length;
      return ({
        ...state,
        notes: state.notes.concat(newId),
        notesById: {
          ...state.notesById,
          [newId]: {
            id: newId,
            name: action.name,
            content: action.content,
            date: state.date
          }
        },
      })

    default:
      return state;
  }
}