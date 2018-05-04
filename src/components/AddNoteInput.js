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
          onChange={this.inputHandleChange}
        />
        <textarea
          type="text"
          className={classnames('textarea-form-control', styles.addNoteTextArea)}
          placeholder="Type content of a note"
          value={this.state.content}
          onChange={this.textAreaHandleChange}
        />
        <div className={styles.formControl}>
          <button className={`btn btn-add ${styles.btnAction}`} onClick={this.addHandleNote}>
            <i className="fa fa-plus" />Add Note<i className="fa fa-plus" />
          </button>
        </div>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      content: this.props.content || ''
    };
  }

  addHandleNote = (e) => {
    if (this.state.name === '' || this.state.content === '') {
      return alert('Fill the fields and try again');
    } else {
      this.props.addNote(
        this.state.name, 
        this.state.content, 
        (new Date()).toLocaleString('ru-RU',{
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      );
      this.setState({ name: '', content: ''});
    }
  }

  inputHandleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  textAreaHandleChange = (e) => {
    this.setState({ content: e.target.value });
  }
}

AddNoteInput.propTypes = {
  addNote: PropTypes.func
}