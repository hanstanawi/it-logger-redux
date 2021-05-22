import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { clearCurrent, updateLog } from '../../actions/logActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ currentLog, clearCurrent, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (currentLog) {
      setMessage(currentLog.message);
      setAttention(currentLog.attention);
      setTech(currentLog.tech);
    }
  }, [currentLog]);

  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({ html: 'Please add tech and a message' });
    } else {
      const updatedLog = {
        id: currentLog.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(updatedLog);
      M.toast({ html: `Log updated by ${tech}` });
      clearInputs();
      clearCurrent();
    }
  };

  const clearInputs = () => {
    setMessage('');
    setTech('');
    setAttention(false);
  };

  return (
    <div
      className='modal modal-fixed-footer'
      id='edit-log-modal'
      style={modalStyle}
    >
      <div className='modal-content'>
        <h5>Enter System Log</h5>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sarah Wilson'>Sarah Wilson</option>
              <option value='Sam Smith'>Sam Smith</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='!#'
          onClick={onSubmit}
          className='modal-close waves-effect btn blue'
          style={{ marginRight: '1.5rem' }}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '45vw',
  height: '45vh',
};

const mapStateToProps = (state) => {
  return {
    currentLog: state.log.currentLog,
  };
};

EditLogModal.propTypes = {
  currentLog: PropTypes.object.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  updateLog: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { clearCurrent, updateLog })(
  EditLogModal
);
