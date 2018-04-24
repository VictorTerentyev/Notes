import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddNoteInput.css';

export default class AddNoteInput extends Component {
  render () {
    return (
      <div className={styles.formControl}>
        <input 
          type="text"
          className={classnames('input-form-control', styles.addNoteInput)}
          placeholder="Type the name of a note"
          value={this.state.name}
          onChange={this.inputHandleChange.bind(this)}
          onKeyDown={this.inputHandleSubmit.bind(this)} 
        />
        <textarea
          type="text"
          className={classnames('textarea-form-control', styles.addNoteTextArea)}
          placeholder="Type content of a note"
          onChange={this.textAreaHandleChange.bind(this)}
          onKeyDown={this.textAreaHandleSubmit.bind(this)}
          value={this.state.content}
        />
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      content: this.props.content || '',
      date: new Date().toLocaleString().slice(0,10) || ''
    };
  }

  inputHandleChange (e) {
    this.setState({ name: e.target.value, content: document.querySelector('.textarea-form-control').value });
  }

  inputHandleSubmit (e) {
    const name = e.target.value.trim();
    const content = document.querySelector('.textarea-form-control').value.trim();
    if (e.which === 13) {
      this.props.addNote(name, content);
      this.setState({ name: '', content: '' });
    }
  }

  textAreaHandleChange (e) {
    this.setState({ content: e.target.value, name: document.querySelector('.input-form-control').value });
  }

  textAreaHandleSubmit (e) {
    const name = document.querySelector('.input-form-control').value.trim();
    const content = e.target.value.trim();
    if (e.which === 13) {
      this.props.addNote(name, content);
      this.setState({ content: '', name: '' });
    }
  }

}

AddNoteInput.propTypes = {
  addNote: PropTypes.func
}