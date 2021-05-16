import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (!firstName || !lastName) {
      M.toast({
        html: 'Please enter first name and last name of the technician',
      });
    } else {
      console.log(firstName, lastName);
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div
      className='modal modal-fixed-footer'
      id='add-tech-modal'
      style={modalStyle}
    >
      <div className='modal-content'>
        <h5 style={{ marginBottom: '1.5rem' }}>New Technician</h5>
        <div className='row'>
          <div className='col s6'>
            <div className='input-field'>
              <input
                type='text'
                name='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor='firstName' className='active'>
                First Name
              </label>
            </div>
          </div>
          <div className='col s6'>
            <div className='input-field'>
              <input
                type='text'
                name='lastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor='lastName' className='active'>
                First Name
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='!#'
          onClick={onSubmit}
          className='modal-close waves-effect btn blue'
          style={{ marginRight: '1.5rem' }}
        >
          Submit
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  height: '27vh',
};

export default AddTechModal;
