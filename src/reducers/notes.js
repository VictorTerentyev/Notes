import * as types from '../constants/ActionTypes';

const initialState = {
  id: (new Date()).getTime(),
  name: 'default',
  content: 'default',
  date: 'default',
  notesById: {}
}

export default function notes(state = initialState, action) {

  switch (action.type) {

    case types.EDIT_NOTE:
      return ({
        ...state,
        notesById: {
          ...state.notesById,
          [action.id]: {
            id: action.id,
            name: action.name,
            content: action.content,
            date: action.date
          }
        },
      })

    case types.REMOVE_NOTE:
      delete state.notesById[action.id];
      return ({
        ...state,
        notesById: state.notesById
      })

    case types.ADD_NOTE:
      const newId = (new Date()).getTime();
      return ({
        ...state,
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