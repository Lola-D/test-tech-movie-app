import React from 'react';

import './progress-bar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className='progress-bar-container'>
      <div
        style={{
          height: '5px',
          backgroundColor: 'rgb(52, 199, 52)',
          width: `${progress}%`
        }}
      >
      </div>
    </div>
  );
};

export default ProgressBar;
