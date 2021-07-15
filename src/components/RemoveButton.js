import React from 'react';
import { FaTimes } from 'react-icons/fa';

import './remove-button.css';

const RemoveButton = ({ handleClick, removeMovie }) => {
  const iconStyle = {
    color: removeMovie ? '#366397' : '#FFF',
    fontSize: '1rem'
  }

  return (
    <button
      onClick={handleClick}
      className={removeMovie ? 'button-remove remove-movie' : 'button-remove'}
    >
      <FaTimes style={iconStyle} />
    </button>
  );
};

export default RemoveButton;
