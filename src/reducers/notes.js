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
        notes: state.notes.concat(id),
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
      const array = Array.from(state);
      return ({
        ...state,
        notes: state.notes.filter(id => id !== action.id),
        notesById: state.notesById = delete state.notesById[action.id]
      })

    case types.ADD_NOTE:
      const newId = state.notes[state.notes.length-1] + 1;
      return ({
        ...state,
        notes: state.notes.concat(newId),
        notesById: {
          ...state.notesById,
          [newId]: {
            id: newId,
            name: action.name,
            content: action.content,
            date: action.date
          }
        },
      })

    default:
      return state;
  }
}