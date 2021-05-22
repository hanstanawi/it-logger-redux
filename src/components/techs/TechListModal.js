import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({ tech: { techs, loading }, fetchTechs }) => {
  useEffect(() => {
    fetchTechs();
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

const mapStateToProps = (state) => {
  return {
    tech: state.tech,
  };
};

export default connect(mapStateToProps, { fetchTechs })(TechListModal);
