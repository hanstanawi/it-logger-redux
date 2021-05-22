import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';

const TechSelectOptions = ({ fetchTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    fetchTechs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

const mapStateToProps = (state) => {
  return {
    tech: state.tech,
  };
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  fetchTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchTechs })(TechSelectOptions);
