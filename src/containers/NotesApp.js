import styles from './NotesApp.css';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Notes from '../components/Notes';


/*@connect(state => ({
  notes: state.notes
}))*/

export default class NotesApp extends Component {

  render () {
    return (
      <div>
        <Notes />
      </div>
    );
  }
  
}