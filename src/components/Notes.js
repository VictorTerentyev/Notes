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
            key={e[e.length-1].id}
            id={e[e.length-1].id}
            name={e[e.length-1].name}
            content={e[e.length-1].content}
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