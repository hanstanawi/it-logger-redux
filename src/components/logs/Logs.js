import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import { fetchLogs } from '../../actions/logActions';

const Logs = () => {
  const { logs, loading } = useSelector((state) => state.log);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLogs());
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

export default Logs;
