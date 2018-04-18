import styles from './NotesApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Notes from '../components/Notes';

/*
@connect(state => ({
  notes: state.notes
}))
*/

export default class NotesApp extends Component {

  render () {
    const { notes: { notesById }, dispatch } = this.props;

    return (
      <Notes />
    );
  }
}

NotesApp.propTypes = {
  notesById: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}