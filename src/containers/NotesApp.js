import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Notes, AddNoteInput as AppActions } from '../components';

import styles from './NotesApp.css';

@connect(state => ({
  notes: state.notes
}))

export default class NotesApp extends Component {
  render () {
    const { notes: { notesById }, dispatch } = this.props;
    const actions = bindActionCreators(AppActions, dispatch);

    return (
      <div className={styles.notesApp}>
        <h1>Notes</h1>
        <AddNoteInput addNote={actions.addNote} />
        <Notes notes={notesById} actions={actions} />
      </div>
    );
  }
}

NotesApp.propTypes = {
  notesById: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}