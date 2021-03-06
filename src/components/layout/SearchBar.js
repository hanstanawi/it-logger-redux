import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useRef('');

  const onQueryChange = (e) => {
    dispatch(searchLogs(query.current.value));
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              required
              placeholder='Search Logs'
              ref={query}
              onChange={onQueryChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
