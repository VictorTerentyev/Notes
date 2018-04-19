import React, { Component, PropTypes } from 'react';

import styles from './Notes.css';

export default class Notes extends Component {
  render () {
    return (
      <ul className={styles.notes}>
        {this.props.notes.map(e => {
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
  notes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}