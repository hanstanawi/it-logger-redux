import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechs } from '../../actions/techActions';

const TechSelectOptions = () => {
  const { techs, loading } = useSelector((state) => state.tech);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechs());
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

export default TechSelectOptions;
