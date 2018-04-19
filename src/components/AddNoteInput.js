import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddNoteInput.css';

export default class AddNoteInput extends Component {
  render () {
    return (
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
        onChange={this.textAreahandleChange.bind(this)}
        onKeyDown={this.textAreahandleSubmit.bind(this)}
      >
        {this.state.content}
      </textarea>
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
    this.setState({ name: e.target.value });
  }

  inputHandleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addFriend(name);
      this.setState({ name: '' });
    }
  }

  textAreaHandleChange (e) {
    this.setState({ content: e.target.value });
  }

  textAreaHandleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addNote(name, content);
      this.setState({ content: '' });
    }
  }

}

AddNoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
}