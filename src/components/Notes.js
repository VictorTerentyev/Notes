import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Notes.css';

import NotesItem from './NotesItem';

export default class Notes extends Component {
  render () {
    return (
      <ul className={styles.notes}>
        {Object.entries(this.props.notes).map(e => {
          return (
            <NotesItem
            key={e.id}
            id={e.id}
            name={e.name}
            content={e.content}
            {...this.props.actions}
            /> 
          );
        })}
      </ul>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.object,
  actions: PropTypes.object
}