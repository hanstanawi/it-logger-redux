import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTechs();
  }, []);

  const fetchTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div className='modal' id='tech-list-modal'>
      <div className='modal-content'>
        <h5>Technician List</h5>
        <ul className='collection'>
          {!loading && !techs.length ? (
            <p className='center'>No Technicians</p>
          ) : (
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
