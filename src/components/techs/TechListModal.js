import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = () => {
  const { techs, loading } = useSelector((state) => state.tech);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTechs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='modal' id='tech-list-modal'>
      <div className='modal-content'>
        <h5>Technician List</h5>
        <ul className='collection'>
          {!techs && !loading ? (
            <p className='center'>No Technicians</p>
          ) : (
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  fetchTechs: PropTypes.func.isRequired,
};

export default TechListModal;
