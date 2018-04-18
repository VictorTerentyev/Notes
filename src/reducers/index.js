import { combineReducers } from 'redux';
import app from './app'
import note from './note'

export default combineReducers({
  app,
  note
})