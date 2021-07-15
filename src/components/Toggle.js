import React from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

import './toggle.css';

const Toggle = ({ handleClick, dislike, likes, isClicked }) => {
  const iconStyle = {
    color: dislike && isClicked
      ? 'red'
      : isClicked
        ? 'rgb(52, 199, 52)'
        : '#FFF',
    fontSize: '1.5rem',
    paddingRight: '0.5rem'
  };

  return (
    <button onClick={handleClick} className='toggle-button'>
      {
        dislike
          ? <FaThumbsDown style={iconStyle} />
          : <FaThumbsUp style={iconStyle} />
      }
      {likes}
    </button>
  );
};

export default Toggle;
