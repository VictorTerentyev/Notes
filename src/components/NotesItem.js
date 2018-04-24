import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NotesItem.css';

export default class NotesItem extends Component {
  render () {
    return (
      <li className={styles.notesItem}>
        <div className={styles.noteInf}>
          <div><input type="text" onChange={() => this.props.editeNote(this.props.name, this.props.content)} value={this.props.name}/></div>
          <div><textarea onChange={() => this.props.editeNote(this.props.name, this.props.content)}>{this.props.content}</textarea></div>
          <div><span>{this.props.date}</span></div>
        </div>
        <div className={styles.noteAction}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.removeNote(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

NotesItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  editNote: PropTypes.func,
  removeNote: PropTypes.func
}