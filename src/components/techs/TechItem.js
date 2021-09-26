import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech }) => {
  const dispatch = useDispatch();

  const onDeleteTech = () => {
    dispatch(deleteTech(tech.id));
    M.toast({ html: `Technician Deleted` });
  };

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={onDeleteTech}>
          <i className='material-icons red-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
