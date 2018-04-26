import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NotesItem.css';

export default class NotesItem extends Component {
  render () {
    return (
      <li className={`${styles.notesItem} note-${this.props.id}`}>
        <input 
          type="text" 
          value={this.state.name} 
          onChange={this.inputHandleChange.bind(this)}
        />
        <textarea 
          value={this.state.content}
          onChange={this.textAreaHandleChange.bind(this)}
        />
        <div className={styles.itemControls}>
          <span className={styles.itemDate}>Date: {this.state.date}</span>
          <button className={`btn btn-edit ${styles.btnAction}`} onClick={() => this.editNote(this.props.id, this.state.name, this.state.content, this.state.date)}>
            <i className="fa fa-edit"/>
          </button>
          <button className={`btn btn-remove ${styles.btnAction}`} onClick={() => this.removeNote(this.props.id)}>
            <i className={`fa fa-trash ${styles.removeIcon}`}/>
          </button>
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
      date: this.currentDate() || ''
    };
  }

  currentDate() {
    let date = new Date();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.toLocaleString().slice(0,10) + ' ' + hours + ':' + minutes;
  }

  removeNote(id) {
    this.props.removeNote(id);
  }

  editNote(id, name, content, date) {
    if (name === '' || content === '') {
      return alert('Fill the fields and try again');
    } else {
      document.querySelector('.note-' + this.props.id + ' span').innerHTML = 'Date: ' + this.currentDate();
      this.props.editNote(id, name, content, this.currentDate());
    }
  }

  inputHandleChange(e) {
    this.setState({ name: e.target.value });
  }

  textAreaHandleChange(e) {
    this.setState({ content: e.target.value });
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