import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NotesItem.css';

export default class NotesItem extends Component {
  render () {
    return (
      <li className={`${styles.notesItem} note-${this.props.id}`}>
        <div className={styles.noteInf}>
          <div>
            <input 
              type="text" 
              value={this.state.name} 
              onChange={this.inputHandleChange.bind(this)}
            />
          </div>
          <div>
            <textarea 
              onChange={this.textAreaHandleChange.bind(this)}>
              {this.state.content}
            </textarea>
          </div>
          <div><span>{this.state.date}</span></div>
          <div>
            <button className={`btn btn-edit ${styles.btnAction}`} onClick={() => this.editNote(this.props.id, this.state.name, this.state.content)}>
              <i className="fa fa-edit" />
            </button>
            <button className={`btn btn-remove ${styles.btnAction}`} onClick={() => this.props.removeNote(this.props.id)}>
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
      </li>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      id: this.props.id || '',
      name: this.props.name || '',
      content: this.props.content || '',
      date: new Date().toLocaleString().slice(0,10) || ''
    };
  }

  editNote(id, name, content) {
    if (name === '' || content === '') {
      return alert('Fill the fields and try again');
    } else {
      this.props.editNote(id, name, content);
    }
  }

  inputHandleChange(e) {
    this.setState({ name: e.target.value, content: document.querySelector('.note-' + this.props.id + ' textarea').value });
  }

  textAreaHandleChange(e) {
    this.setState({ content: e.target.value, name: document.querySelector('.note-' + this.props.id + ' input').value });
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