import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './NotesItem.css';

export default class NotesItem extends Component {
  render () {
    return (
      <li className={styles.notesItem}>
        <div className={styles.noteInf}>
          <div><input type="text" onchange={() => this.props.editeNote(this.props.name, this.props.content)} value={this.props.name}/></div>
          <div><textarea onchange={() => this.props.editeNote(this.props.name, this.props.content)}>{this.props.content}</textarea></div>
          <div><span>{this.props.date}</span></div>
        </div>
        <div className={style.noteAction}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.removeNote(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

NotesItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  editNote: PropTypes.func.Required,
  removeNote: PropTypes.func.Required
}