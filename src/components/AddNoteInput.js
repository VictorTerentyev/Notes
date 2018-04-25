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
        />
        <textarea
          type="text"
          className={classnames('textarea-form-control', styles.addNoteTextArea)}
          placeholder="Type content of a note"
          value={this.state.content}
          onChange={this.textAreaHandleChange.bind(this)}
        />
      <button className={`btn btn-add ${styles.btnAction}`} onClick={() => this.addNote(this.state.name, this.state.content)}>
        <i className="fa fa-add" />
      </button>
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

  addNote(name, content) {
    if (name === '' || content === '') {
      return alert('Fill the fields and try again');
    } else {
      this.props.addNote(name, content);
      this.setState({ name: '', content: '' });
    }
  }

  inputHandleChange (e) {
    this.setState({ name: e.target.value, content: document.querySelector('.textarea-form-control').value });
  }

  textAreaHandleChange (e) {
    this.setState({ content: e.target.value, name: document.querySelector('.input-form-control').value });
  }
}

AddNoteInput.propTypes = {
  addNote: PropTypes.func
}