import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from '../actions/NotesActions';

import { Notes, AddNoteInput } from '../components';

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
  notesById: PropTypes.object,
  dispatch: PropTypes.func
}