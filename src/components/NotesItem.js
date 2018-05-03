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
          onChange={this.inputHandleChange}
        />
        <textarea 
          value={this.state.content}
          onChange={this.textAreaHandleChange}
        />
        <div className={styles.itemControls}>
          <span className={styles.itemDate}>Date: {this.props.date}</span>
          <button className={`btn btn-edit ${styles.btnAction}`} onClick={this.editHandleNote}>
            <i className="fa fa-edit"/>
          </button>
          <button className={`btn btn-remove ${styles.btnAction}`} onClick={this.removeHandleNote}>
            <i className={`fa fa-trash ${styles.removeIcon}`}/>
          </button>
        </div>
      </li>
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      name: nextProps.name || '',
      content: nextProps.content || ''
    }
  }

  removeHandleNote = (e) => {
    this.props.removeNote(this.props.id);
  }

  editHandleNote = (e) => {
    if (this.state.name === '' || this.state.content === '') {
      return alert('Fill the fields and try again');
    } else {
      const date = new Date();
      this.props.editNote(
        this.props.id, 
        this.state.name, 
        this.state.content, 
        date.toLocaleString('ru-RU',{
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      );
    }
  }

  inputHandleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  textAreaHandleChange = (e) => {
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