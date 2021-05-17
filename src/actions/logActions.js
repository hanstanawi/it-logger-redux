import {
  GET_LOGS,
  ADD_LOG,
  SET_LOADING,
  DELETE_LOG,
  LOGS_ERROR,
} from './types';

// Fetch logs data from API
export const fetchLogs = () => async (dispatch) => {
  try {
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Add new log to API
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading(true);
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Delete Log from API
export const deleteLog = (logId) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/logs/${logId}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_LOG,
      payload: logId,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
