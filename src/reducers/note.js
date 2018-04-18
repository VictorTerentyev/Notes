import * as types from '../constants/ActionTypes';

const currentDate = new Date().toLocaleString().slice(0,10);

const initialState = {
  id: 'default',
  name: 'default',
  content: 'default',
  refreshDate: currentDate
}

export default function note (state = initialState, action) {
  return state
}