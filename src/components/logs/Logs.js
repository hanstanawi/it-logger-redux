import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import { fetchLogs } from '../../actions/logActions';

const Logs = ({ log: { loading, logs }, fetchLogs }) => {
  useEffect(() => {
    fetchLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading && logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && !logs ? (
        <p className='center'>No Logs</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    log: state.log,
  };
};

export default connect(mapStateToProps, { fetchLogs })(Logs);
