import { ADD_NOTE as types } from '../constants/ActionTypes';

const date = new Date().toLocaleString().slice(0,10);

const initialState = {
  id: 'default',
  name: 'default',
  content: 'default',
  refreshDate: date,
  notes: [],
  notesById: {}
}

export default function app (state = initialState, action) {
  switch (action.type) {

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