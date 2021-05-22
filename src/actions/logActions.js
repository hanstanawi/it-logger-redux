import {
  GET_LOGS,
  ADD_LOG,
  SET_LOADING,
  DELETE_LOG,
  LOGS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
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
      payload: err.response.statusText,
    });
  }
};

// Search Logs
export const searchLogs = (query) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${query}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
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
      payload: err.response.statusText,
    });
  }
};

// Update Log to API
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
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
      payload: err.response.statusText,
    });
  }
};

// Set Current Editing Log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Clear current editing log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
