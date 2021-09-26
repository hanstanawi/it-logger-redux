import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';

const LogItem = ({ log }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteLog(log.id));
    M.toast({ html: `Log #${log.id} removed` });
  };

  const onSetCurrent = () => {
    dispatch(setCurrent(log));
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${log.attention ? 'red' : 'blue'}-text`}
          onClick={onSetCurrent}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> Last Updated by{' '}
          <span className='blac-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons red-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
